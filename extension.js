const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('sectioncomment.createSectionComment', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const doc = editor.document;
            const selection = editor.selection;
            const text = doc.getText(selection);

            const asciiArtComment = generateAsciiArtComment(text);

            editor.edit(editBuilder => {
                editBuilder.replace(selection, asciiArtComment);
            });
        }
    });

    context.subscriptions.push(disposable);
}

function generateAsciiArtComment(text) {
    const asciiArt = {
        'A': [
            '   A   ',
            '  A A  ',
            ' AAAAA ',
            'A     A',
            'A     A'
        ],
        'B': [
            'BBBB  ',
            'B   B ',
            'BBBB  ',
            'B   B ',
            'BBBB  '
        ],
        'C': [
            ' CCCCC',
            'C     ',
            'C     ',
            'C     ',
            ' CCCCC'
        ],
        'D': [
            'DDDDD ',
            'D    D',
            'D    D',
            'D    D',
            'DDDDD '
        ],
        'E': [
            'EEEEEE',
            'E     ',
            'EEEE  ',
            'E     ',
            'EEEEEE'
        ],
        'F': [
            'FFFFFF',
            'F     ',
            'FFFF  ',
            'F     ',
            'F     '
        ],
        'G': [
            ' GGGGG',
            'G     ',
            'G  GGG',
            'G    G',
            ' GGGG '
        ],
        'H': [
            'H    H',
            'H    H',
            'HHHHHH',
            'H    H',
            'H    H'
        ],
        'I': [
            'IIIII',
            '  I  ',
            '  I  ',
            '  I  ',
            'IIIII'
        ],
        'J': [
            'JJJJJJ',
            '    J ',
            '    J ',
            'J   J ',
            ' JJJ  '
        ],
        'K': [
            'K    K',
            'K  K  ',
            'KK    ',
            'K  K  ',
            'K    K'
        ],
        'L': [
            'L     ',
            'L     ',
            'L     ',
            'L     ',
            'LLLLLL'
        ],
        'M': [
            'M     M',
            'MM   MM',
            'M M M M',
            'M  M  M',
            'M     M'
        ],
        'N': [
            'N     N',
            'NN    N',
            'N N   N',
            'N  N  N',
            'N   N N'
        ],
        'O': [
            ' OOOOO ',
            'O     O',
            'O     O',
            'O     O',
            ' OOOOO '
        ],
        'P': [
            'PPPPPP ',
            'P     P',
            'PPPPPP ',
            'P      ',
            'P      '
        ],
        'Q': [
            ' QQQQQ ',
            'Q     Q',
            'Q  Q  Q',
            'Q   Q Q',
            ' QQQQQ '
        ],
        'R': [
            'RRRRRR ',
            'R     R',
            'RRRRRR ',
            'R   R  ',
            'R    R '
        ],
        'S': [
            ' SSSSS ',
            'S      ',
            ' SSSSS ',
            '      S',
            ' SSSSS '
        ],
        'T': [
            'TTTTTT',
            '  TT  ',
            '  TT  ',
            '  TT  ',
            '  TT  '
        ],
        'U': [
            'U     U',
            'U     U',
            'U     U',
            'U     U',
            ' UUUUU '
        ],
        'V': [
            'V     V',
            'V     V',
            ' V   V ',
            '  V V  ',
            '   V   '
        ],
        'W': [
            'W     W',
            'W     W',
            'W  W  W',
            'W W W W',
            ' W   W '
        ],
        'X': [
            'X     X',
            ' X   X ',
            '  X X  ',
            ' X   X ',
            'X     X'
        ],
        'Y': [
            'Y     Y',
            ' Y   Y ',
            '  YYY  ',
            '   Y   ',
            '   Y   '
        ],
        'Z': [
            'ZZZZZZ',
            '    Z ',
            '   Z  ',
            '  Z   ',
            'ZZZZZZ'
        ],
        ' ': [
            '      ',
            '      ',
            '      ',
            '      ',
            '      '
        ],
        '0': [
            ' 0000 ',
            '0    0',
            '0    0',
            '0    0',
            ' 0000 '
        ],
        '1': [
            '  1   ',
            ' 11   ',
            '  1   ',
            '  1   ',
            '11111 '
        ],
        '2': [
            ' 2222 ',
            '2    2',
            '   22 ',
            ' 2    ',
            '222222'
        ],
        '3': [
            ' 3333 ',
            '     3',
            '  333 ',
            '     3',
            ' 3333 '
        ],
        '4': [
            '4    4',
            '4    4',
            '444444',
            '     4',
            '     4'
        ],
        '5': [
            '555555',
            '5     ',
            '55555 ',
            '     5',
            '55555 '
        ],
        '6': [
            ' 6666 ',
            '6     ',
            '66666 ',
            '6    6',
            ' 6666 '
        ],
        '7': [
            '777777',
            '    7 ',
            '   7  ',
            '  7   ',
            ' 7    '
        ],
        '8': [
            ' 8888 ',
            '8    8',
            ' 8888 ',
            '8    8',
            ' 8888 '
        ],
        '9': [
            ' 9999 ',
            '9    9',
            ' 99999',
            '     9',
            ' 9999 '
        ],
        '!': [
            '  !!  ',
            '  !!  ',
            '  !!  ',
            '      ',
            '  !!  '
        ],
        '?': [
            '  ???? ',
            '     ? ',
            '   ??? ',
            '       ',
            '   ?   '
        ],
        '.': [
            '      ',
            '      ',
            '      ',
            '  ..  ',
            '  ..  '
        ],
        ',': [
            '      ',
            '      ',
            '      ',
            '  ,,  ',
            '  ,,  '
        ],
        ':': [
            '      ',
            '  ::  ',
            '      ',
            '  ::  ',
            '      '
        ],
        ';': [
            '      ',
            '  ;;  ',
            '      ',
            '  ;;  ',
            '  ;;  '
        ],
        '-': [
            '      ',
            '      ',
            '------',
            '      ',
            '      '
        ],
        '_': [
            '      ',
            '      ',
            '      ',
            '      ',
            '______'
        ],
        '=': [
            '      ',
            '======',
            '      ',
            '======',
            '      '
        ],
        '+': [
            '      ',
            '  ++  ',
            '++++++',
            '  ++  ',
            '      '
        ],
        '*': [
            '  *  ',
            '* * *',
            ' *** ',
            '* * *',
            '  *  '
        ],
        '/': [
            '    /',
            '   / ',
            '  /  ',
            ' /   ',
            '/    '
        ],
        '\\': [
            '\\    ',
            ' \\   ',
            '  \\  ',
            '   \\ ',
            '    \\'
        ]
    };

    let result = '';
    for (let i = 0; i < 5; i++) {  // Assuming 5 lines height for ASCII art
        for (let char of text) {
            if (asciiArt[char.toUpperCase()]) {
                result += asciiArt[char.toUpperCase()][i] + '  '; // Add an extra space between characters
            } else {
                result += ' '.repeat(7);  // Space for unknown characters
            }
        }
        result += '\n';
    }

    return `/*\n${result}*/`;
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
