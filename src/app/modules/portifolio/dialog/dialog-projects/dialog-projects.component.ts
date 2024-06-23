import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../components/interface/IProjects.interface';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit {

  constructor(
    private _dialogrRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects) {}

  public getData = signal<IProjects| null>(null);

  ngOnInit(): void {
      this.getData.set(this._data);
  }

  public closeModal() {
    return this._dialogrRef.close();
  }


}
