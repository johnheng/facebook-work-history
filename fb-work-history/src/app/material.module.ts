import {
    MatFormFieldModule,
    MatCardModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatChipsModule,
    MatIconModule
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
        MatExpansionModule,
        MatChipsModule,
        MatIconModule
    ],
    exports: [
        MatFormFieldModule,
        MatCardModule,
        MatOptionModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatExpansionModule,
        MatChipsModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: []
})

export class MaterialModule { }
