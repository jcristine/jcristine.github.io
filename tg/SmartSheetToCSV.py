#!/usr/bin/env python3

# pip install smartsheet-python-sdk
# http://smartsheet-platform.github.io/api-docs/
# https://smartsheet-platform.github.io/api-docs/?python#get-sheet

import smartsheet
import sys

smartsheet = smartsheet.Smartsheet('TOKEN_GOES_HERE')

def SheetToCSV(sheetID):

    outfile = sheetID + '.csv'
    sheet = smartsheet.Sheets.get_sheet(sheetID)

    _head = ''
    _row  = ''

    for col in sheet.columns:
        c = col.title.replace(' ', '')
        _head += c + ','

    _head = _head[:-1]
    print(_head, file=open(outfile, "w"))

    for row in sheet.rows:
        for cell in row.cells:
            _row += str(cell.value) + ','
        _row = _row[:-1]
        print(_row, file=open(outfile, "a"))
        _row = ''

if __name__ == "__main__":
    if len(sys.argv) == 1:
        print("Usage: python SmartSheetToCSV.py 3879110125610884")
        exit()
    SheetToCSV(sys.argv[1])
