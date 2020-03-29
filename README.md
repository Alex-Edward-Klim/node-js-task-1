# !!!WARNING!!!
Pay close attention to the point number **9** in the [crosscheck description](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/CROSSCHECK.md)!
Please, NOTE (!) that if you are using **stdin** as an input source while the **output file** is provided, remember to REFRESH the **output file** ALWAYS after pressing "Enter" to see changes! E.g.: if you are using VSCode, then after pressing "Enter" switch away from the **output file** and then switch back to this **output file**, because VSCode does NOT always update file changes correctly!

## BEFORE (!) running npm install NAVIGATE to the caesar-cipher-cli-task-1 folder!

## Only AFTER that RUN:
**npm install**
because package.json is located in the **caesar-cipher-cli-task-1** folder!

## Then RUN:
**node index.js** with the following options:

CLI tool should accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

**input file** and **output file** are optional.

If **input file** is not provided then **stdin** will be used as an input source*.

If **output file** is not provided then **stdout** will be used as an output source.
