import { AfterContentInit } from '@angular/core';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { MapComponent } from '../map.component';
import { SourceVectorTileComponent } from './vectortile.component';
import { HttpClient } from '@angular/common/http';
export declare class SourceMapboxVectorTileComponent extends SourceVectorTileComponent implements AfterContentInit {
    private map;
    private http;
    styleUrl: string;
    sourceName: string;
    spriteJsonUrl: string;
    spriteUrl: string;
    private styleLoaded;
    private spriteJsonLoaded;
    private glStyle;
    private spriteData;
    constructor(layer: LayerVectorTileComponent, map: MapComponent, http: HttpClient);
    ngAfterContentInit(): void;
    applyMapboxStyle(): void;
}
