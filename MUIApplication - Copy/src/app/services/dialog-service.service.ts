import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../Components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(title: string, message: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { title, message };
    this.dialog.open(DialogComponent, dialogConfig);
  }
}
