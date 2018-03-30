import {
    MatFormFieldModule,
    MatCardModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule
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
        MatButtonModule,
        MatExpansionModule
    ],
    exports: [
        MatFormFieldModule,
        MatCardModule,
        MatOptionModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatExpansionModule
    ],
    providers: [],
    bootstrap: []
})

export class MaterialModule { }
