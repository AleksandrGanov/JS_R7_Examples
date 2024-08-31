let ws = Api.GetActiveSheet();
let cell = ws.GetCells(1,1);
let noFill = Api.CreateNoFill();
cell.SetFillColor(noFill);