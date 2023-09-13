<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crossword Puzzle</title>
    <style>
        .crossword-grid {
            display: grid;
            grid-template-columns: repeat(5, 50px);
            gap: 2px;
        }
        .cell {
            width: 50px;
            height: 50px;
            text-align: center;
            border: 1px solid #000;
        }
    </style>
</head>
<body>
    <h1>Crossword Puzzle</h1>
    <div id="puzzle-container">
        <div class="crossword-grid" id="crossword-grid">
            <!-- Puzzle grid will be generated here -->
        </div>
    </div>

    <script>
        // Sample crossword puzzle data
        const crosswordData = [
            ["", "", "H", "", ""],
            ["", "", "E", "", ""],
            ["", "", "L", "", ""],
            ["", "", "L", "", ""],
            ["", "", "O", "", ""],
        ];

        // Function to generate the crossword grid
        function generateCrosswordGrid(data) {
            const gridContainer = document.getElementById("crossword-grid");
            data.forEach((row, rowIndex) => {
                row.forEach((cell, colIndex) => {
                    const cellElement = document.createElement("div");
                    cellElement.className = "cell";
                    cellElement.textContent = cell;
                    gridContainer.appendChild(cellElement);
                });
            });
        }

        // Initialize the crossword puzzle
        generateCrosswordGrid(crosswordData);
    </script>
</body>
</html>
