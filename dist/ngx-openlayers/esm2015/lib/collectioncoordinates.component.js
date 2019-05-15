/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional } from '@angular/core';
import { MapComponent } from './map.component';
import { GeometryLinestringComponent } from './geom/geometrylinestring.component';
import { GeometryPolygonComponent } from './geom/geometrypolygon.component';
import { GeometryMultiPointComponent } from './geom/geometrymultipoint.component';
import { GeometryMultiLinestringComponent } from './geom/geometrymultilinestring.component';
import { GeometryMultiPolygonComponent } from './geom/geometrymultipolygon.component';
import { transform } from 'ol/proj';
export class CollectionCoordinatesComponent {
    /**
     * @param {?} map
     * @param {?} geometryLinestring
     * @param {?} geometryPolygon
     * @param {?} geometryMultipoint
     * @param {?} geometryMultilinestring
     * @param {?} geometryMultipolygon
     */
    constructor(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
        this.map = map;
        this.mapSrid = 'EPSG:3857';
        this.srid = 'EPSG:3857';
        if (!!geometryLinestring) {
            this.host = geometryLinestring;
        }
        else if (!!geometryPolygon) {
            this.host = geometryPolygon;
        }
        else if (!!geometryMultipoint) {
            this.host = geometryMultipoint;
        }
        else if (!!geometryMultilinestring) {
            this.host = geometryMultilinestring;
        }
        else if (!!geometryMultipolygon) {
            this.host = geometryMultipolygon;
        }
        else {
            throw new Error('aol-collection-coordinates must be a child of a geometry component');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.map.instance.on('change:view', (/**
         * @param {?} e
         * @return {?}
         */
        e => this.onMapViewChanged(e)));
        this.mapSrid = this.map.instance
            .getView()
            .getProjection()
            .getCode();
        this.transformCoordinates();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.transformCoordinates();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onMapViewChanged(event) {
        this.mapSrid = event.target
            .get(event.key)
            .getProjection()
            .getCode();
        this.transformCoordinates();
    }
    /**
     * @private
     * @return {?}
     */
    transformCoordinates() {
        /** @type {?} */
        let transformedCoordinates;
        if (this.srid === this.mapSrid) {
            transformedCoordinates = this.coordinates;
        }
        else {
            switch (this.host.componentType) {
                case 'geometry-linestring':
                case 'geometry-multipoint':
                    transformedCoordinates = ((/** @type {?} */ (this.coordinates))).map((/**
                     * @param {?} c
                     * @return {?}
                     */
                    c => transform(c, this.srid, this.mapSrid)));
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    transformedCoordinates = ((/** @type {?} */ (this.coordinates))).map((/**
                     * @param {?} cc
                     * @return {?}
                     */
                    cc => cc.map((/**
                     * @param {?} c
                     * @return {?}
                     */
                    c => transform(c, this.srid, this.mapSrid)))));
                    break;
                case 'geometry-multipolygon':
                    transformedCoordinates = ((/** @type {?} */ (this.coordinates))).map((/**
                     * @param {?} ccc
                     * @return {?}
                     */
                    ccc => ccc.map((/**
                     * @param {?} cc
                     * @return {?}
                     */
                    cc => cc.map((/**
                     * @param {?} c
                     * @return {?}
                     */
                    c => transform(c, this.srid, this.mapSrid)))))));
                    break;
            }
        }
        this.host.instance.setCoordinates(transformedCoordinates);
    }
}
CollectionCoordinatesComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-collection-coordinates',
                template: `
    <div class="aol-collection-coordinates"></div>
  `,
            },] },
];
/** @nocollapse */
CollectionCoordinatesComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: GeometryLinestringComponent, decorators: [{ type: Optional }] },
    { type: GeometryPolygonComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiPointComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiLinestringComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiPolygonComponent, decorators: [{ type: Optional }] }
];
CollectionCoordinatesComponent.propDecorators = {
    coordinates: [{ type: Input }],
    srid: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CollectionCoordinatesComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    CollectionCoordinatesComponent.prototype.mapSrid;
    /** @type {?} */
    CollectionCoordinatesComponent.prototype.coordinates;
    /** @type {?} */
    CollectionCoordinatesComponent.prototype.srid;
    /**
     * @type {?}
     * @private
     */
    CollectionCoordinatesComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbmNvb3JkaW5hdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbGxlY3Rpb25jb29yZGluYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBUXBDLE1BQU0sT0FBTyw4QkFBOEI7Ozs7Ozs7OztJQVN6QyxZQUNVLEdBQWlCLEVBQ2Isa0JBQStDLEVBQy9DLGVBQXlDLEVBQ3pDLGtCQUErQyxFQUMvQyx1QkFBeUQsRUFDekQsb0JBQW1EO1FBTHZELFFBQUcsR0FBSCxHQUFHLENBQWM7UUFSbkIsWUFBTyxHQUFHLFdBQVcsQ0FBQztRQUs5QixTQUFJLEdBQUcsV0FBVyxDQUFDO1FBVWpCLElBQUksQ0FBQyxDQUFDLGtCQUFrQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7U0FDaEM7YUFBTSxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7U0FDN0I7YUFBTSxJQUFJLENBQUMsQ0FB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QUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7WUFyRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7O1lBZFEsWUFBWTtZQUNaLDJCQUEyQix1QkF5Qi9CLFFBQVE7WUF4Qkosd0JBQXdCLHVCQXlCNUIsUUFBUTtZQXhCSiwyQkFBMkIsdUJBeUIvQixRQUFRO1lBeEJKLGdDQUFnQyx1QkF5QnBDLFFBQVE7WUF4QkosNkJBQTZCLHVCQXlCakMsUUFBUTs7OzBCQVhWLEtBQUs7bUJBRUwsS0FBSzs7Ozs7OztJQUxOLDhDQUFrQjs7Ozs7SUFDbEIsaURBQThCOztJQUU5QixxREFDOEQ7O0lBQzlELDhDQUNtQjs7Ozs7SUFHakIsNkNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE9wdGlvbmFsLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdlb21ldHJ5TGluZXN0cmluZ0NvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeWxpbmVzdHJpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5cG9seWdvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeU11bHRpUG9pbnRDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnltdWx0aXBvaW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdlb21ldHJ5TXVsdGlMaW5lc3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bXVsdGlsaW5lc3RyaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdlb21ldHJ5TXVsdGlQb2x5Z29uQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bXVsdGlwb2x5Z29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSAnb2wvcHJvaic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb2xsZWN0aW9uLWNvb3JkaW5hdGVzJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFvbC1jb2xsZWN0aW9uLWNvb3JkaW5hdGVzXCI+PC9kaXY+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25Db29yZGluYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBwcml2YXRlIGhvc3Q6IGFueTtcclxuICBwcml2YXRlIG1hcFNyaWQgPSAnRVBTRzozODU3JztcclxuXHJcbiAgQElucHV0KClcclxuICBjb29yZGluYXRlczogQ29vcmRpbmF0ZVtdIHwgQ29vcmRpbmF0ZVtdW10gfCBDb29yZGluYXRlW11bXVtdO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3JpZCA9ICdFUFNHOjM4NTcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeUxpbmVzdHJpbmc6IEdlb21ldHJ5TGluZXN0cmluZ0NvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5UG9seWdvbjogR2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlNdWx0aXBvaW50OiBHZW9tZXRyeU11bHRpUG9pbnRDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeU11bHRpbGluZXN0cmluZzogR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeU11bHRpcG9seWdvbjogR2VvbWV0cnlNdWx0aVBvbHlnb25Db21wb25lbnRcclxuICApIHtcclxuICAgIGlmICghIWdlb21ldHJ5TGluZXN0cmluZykge1xyXG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeUxpbmVzdHJpbmc7XHJcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlQb2x5Z29uKSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5UG9seWdvbjtcclxuICAgIH0gZWxzZSBpZiAoISFnZW9tZXRyeU11bHRpcG9pbnQpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlNdWx0aXBvaW50O1xyXG4gICAgfSBlbHNlIGlmICghIWdlb21ldHJ5TXVsdGlsaW5lc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5TXVsdGlsaW5lc3RyaW5nO1xyXG4gICAgfSBlbHNlIGlmICghIWdlb21ldHJ5TXVsdGlwb2x5Z29uKSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5TXVsdGlwb2x5Z29uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtY29sbGVjdGlvbi1jb29yZGluYXRlcyBtdXN0IGJlIGEgY2hpbGQgb2YgYSBnZW9tZXRyeSBjb21wb25lbnQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2Uub24oJ2NoYW5nZTp2aWV3JywgZSA9PiB0aGlzLm9uTWFwVmlld0NoYW5nZWQoZSkpO1xyXG4gICAgdGhpcy5tYXBTcmlkID0gdGhpcy5tYXAuaW5zdGFuY2VcclxuICAgICAgLmdldFZpZXcoKVxyXG4gICAgICAuZ2V0UHJvamVjdGlvbigpXHJcbiAgICAgIC5nZXRDb2RlKCk7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTWFwVmlld0NoYW5nZWQoZXZlbnQpIHtcclxuICAgIHRoaXMubWFwU3JpZCA9IGV2ZW50LnRhcmdldFxyXG4gICAgICAuZ2V0KGV2ZW50LmtleSlcclxuICAgICAgLmdldFByb2plY3Rpb24oKVxyXG4gICAgICAuZ2V0Q29kZSgpO1xyXG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2Zvcm1Db29yZGluYXRlcygpIHtcclxuICAgIGxldCB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzOiBDb29yZGluYXRlW10gfCBDb29yZGluYXRlW11bXSB8IENvb3JkaW5hdGVbXVtdW107XHJcblxyXG4gICAgaWYgKHRoaXMuc3JpZCA9PT0gdGhpcy5tYXBTcmlkKSB7XHJcbiAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3dpdGNoICh0aGlzLmhvc3QuY29tcG9uZW50VHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2dlb21ldHJ5LWxpbmVzdHJpbmcnOlxyXG4gICAgICAgIGNhc2UgJ2dlb21ldHJ5LW11bHRpcG9pbnQnOlxyXG4gICAgICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9ICg8Q29vcmRpbmF0ZVtdPnRoaXMuY29vcmRpbmF0ZXMpLm1hcChjID0+IHRyYW5zZm9ybShjLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktcG9seWdvbic6XHJcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbXVsdGlsaW5lc3RyaW5nJzpcclxuICAgICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSAoPENvb3JkaW5hdGVbXVtdPnRoaXMuY29vcmRpbmF0ZXMpLm1hcChjYyA9PlxyXG4gICAgICAgICAgICBjYy5tYXAoYyA9PiB0cmFuc2Zvcm0oYywgdGhpcy5zcmlkLCB0aGlzLm1hcFNyaWQpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2dlb21ldHJ5LW11bHRpcG9seWdvbic6XHJcbiAgICAgICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gKDxDb29yZGluYXRlW11bXVtdPnRoaXMuY29vcmRpbmF0ZXMpLm1hcChjY2MgPT5cclxuICAgICAgICAgICAgY2NjLm1hcChjYyA9PiBjYy5tYXAoYyA9PiB0cmFuc2Zvcm0oYywgdGhpcy5zcmlkLCB0aGlzLm1hcFNyaWQpKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRDb29yZGluYXRlcyh0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcclxuICB9XHJcbn1cclxuIl19