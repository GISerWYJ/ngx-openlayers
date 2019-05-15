import { AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { Stroke } from 'ol/style';
import { MapComponent } from './map.component';
export declare class GraticuleComponent implements AfterContentInit, OnChanges {
    private map;
    instance: any;
    componentType: string;
    strokeStyle: Stroke;
    showLabels: boolean;
    lonLabelPosition: number;
    latLabelPosition: number;
    constructor(map: MapComponent);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
}
