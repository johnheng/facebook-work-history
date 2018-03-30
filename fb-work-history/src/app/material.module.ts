import {
    MatFormFieldModule,
    MatCardModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
} from '@angular/material';


import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
    ],
    imports: [
        MatFormFieldModule,
        MatCardModule,
        MatOptionModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule
    ],
    exports: [
        MatFormFieldModule,
        MatCardModule,
        MatOptionModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: []
})

export class MaterialModule { }
