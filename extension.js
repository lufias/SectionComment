const vscode = require('vscode');

function createSectionComment(withFooter) {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const doc = editor.document;
        const selection = editor.selection;
        const text = doc.getText(selection);

        const asciiArtComment = generateAsciiArtComment(text, withFooter);

        editor.edit(editBuilder => {
            editBuilder.replace(selection, asciiArtComment);
        });
    }
}

function createBorderedSectionComment() {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const doc = editor.document;
        const selection = editor.selection;
        const text = doc.getText(selection);

        const asciiArtComment = generateBorderedAsciiArtComment(text);

        editor.edit(editBuilder => {
            editBuilder.replace(selection, asciiArtComment);
        });
    }
}

function activate(context) {
    let disposableWithoutFooter = vscode.commands.registerCommand('SectionComment-Create', function () {
        createSectionComment(false);
    });

    let disposableWithFooter = vscode.commands.registerCommand('SectionComment-CreateWithFooter', function () {
        createSectionComment(true);
    });

    let disposableBordered = vscode.commands.registerCommand('SectionComment-Bordered', function () {
        createBorderedSectionComment();
    });

    context.subscriptions.push(disposableWithoutFooter, disposableWithFooter, disposableBordered);
}

function generateAsciiArtComment(text, withFooter) {
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
    for (let i = 0; i < 5; i++) {
        for (let char of text) {
            if (asciiArt[char.toUpperCase()]) {
                result += asciiArt[char.toUpperCase()][i] + ' '; // Only one space between characters
            } else {
                result += ' '.repeat(6); // Reduced space for unknown characters
            }
        }
        result += '\n';
    }

    // Append the footer text if withFooter is true
    if (withFooter) {
        result += '\nGenerated with SectionComment extension\n';
    }

    return `/*\n${result}*/`;
}

function generateBorderedAsciiArtComment(text) {
    const asciiArt = generateAsciiArtComment(text, false); // Using existing function to generate the main content
    const lines = asciiArt.split('\n');
    const borderLength = Math.max(80, lines[1].length); // Ensure the border line is at least 80 characters long or follows the ASCII art length
    const border = '='.repeat(borderLength);

    return `/*\n${border}\n\n${lines.slice(1, -1).join('\n')}\n\n${border}\nGenerated with SectionComment extension\n*/`;
}



function deactivate() {}

module.exports = {
    activate,
    deactivate
}
