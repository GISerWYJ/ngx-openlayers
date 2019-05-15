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
var CollectionCoordinatesComponent = /** @class */ (function () {
    function CollectionCoordinatesComponent(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
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
    CollectionCoordinatesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.map.instance.on('change:view', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.onMapViewChanged(e); }));
        this.mapSrid = this.map.instance
            .getView()
            .getProjection()
            .getCode();
        this.transformCoordinates();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CollectionCoordinatesComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.transformCoordinates();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    CollectionCoordinatesComponent.prototype.onMapViewChanged = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mapSrid = event.target
            .get(event.key)
            .getProjection()
            .getCode();
        this.transformCoordinates();
    };
    /**
     * @private
     * @return {?}
     */
    CollectionCoordinatesComponent.prototype.transformCoordinates = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var transformedCoordinates;
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
                    function (c) { return transform(c, _this.srid, _this.mapSrid); }));
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    transformedCoordinates = ((/** @type {?} */ (this.coordinates))).map((/**
                     * @param {?} cc
                     * @return {?}
                     */
                    function (cc) {
                        return cc.map((/**
                         * @param {?} c
                         * @return {?}
                         */
                        function (c) { return transform(c, _this.srid, _this.mapSrid); }));
                    }));
                    break;
                case 'geometry-multipolygon':
                    transformedCoordinates = ((/** @type {?} */ (this.coordinates))).map((/**
                     * @param {?} ccc
                     * @return {?}
                     */
                    function (ccc) {
                        return ccc.map((/**
                         * @param {?} cc
                         * @return {?}
                         */
                        function (cc) { return cc.map((/**
                         * @param {?} c
                         * @return {?}
                         */
                        function (c) { return transform(c, _this.srid, _this.mapSrid); })); }));
                    }));
                    break;
            }
        }
        this.host.instance.setCoordinates(transformedCoordinates);
    };
    CollectionCoordinatesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-collection-coordinates',
                    template: "\n    <div class=\"aol-collection-coordinates\"></div>\n  ",
                },] },
    ];
    /** @nocollapse */
    CollectionCoordinatesComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: GeometryLinestringComponent, decorators: [{ type: Optional }] },
        { type: GeometryPolygonComponent, decorators: [{ type: Optional }] },
        { type: GeometryMultiPointComponent, decorators: [{ type: Optional }] },
        { type: GeometryMultiLinestringComponent, decorators: [{ type: Optional }] },
        { type: GeometryMultiPolygonComponent, decorators: [{ type: Optional }] }
    ]; };
    CollectionCoordinatesComponent.propDecorators = {
        coordinates: [{ type: Input }],
        srid: [{ type: Input }]
    };
    return CollectionCoordinatesComponent;
}());
export { CollectionCoordinatesComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbmNvb3JkaW5hdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbGxlY3Rpb25jb29yZGluYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXBDO0lBZUUsd0NBQ1UsR0FBaUIsRUFDYixrQkFBK0MsRUFDL0MsZUFBeUMsRUFDekMsa0JBQStDLEVBQy9DLHVCQUF5RCxFQUN6RCxvQkFBbUQ7UUFMdkQsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVJuQixZQUFPLEdBQUcsV0FBVyxDQUFDO1FBSzlCLFNBQUksR0FBRyxXQUFXLENBQUM7UUFVakIsSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztTQUNoQzthQUFNLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztTQUM3QjthQUFNLElBQUksQ0FBQyxDQUFDLGtCQUFrQixFQUFFO1lBQy9CLElBQUks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QU8sQ0FBQyxFQUFyQyxDQUFxQyxFQUFDLEVBQWxELENBQWtELEVBQUM7b0JBQWpFLENBQWlFLEVBQ2xFLENBQUM7b0JBQ0YsTUFBTTthQUNUO1NBQ0Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkFyRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSw0REFFVDtpQkFDRjs7OztnQkFkUSxZQUFZO2dCQUNaLDJCQUEyQix1QkF5Qi9CLFFBQVE7Z0JBeEJKLHdCQUF3Qix1QkF5QjVCLFFBQVE7Z0JBeEJKLDJCQUEyQix1QkF5Qi9CLFFBQVE7Z0JBeEJKLGdDQUFnQyx1QkF5QnBDLFFBQVE7Z0JBeEJKLDZCQUE2Qix1QkF5QmpDLFFBQVE7Ozs4QkFYVixLQUFLO3VCQUVMLEtBQUs7O0lBMEVSLHFDQUFDO0NBQUEsQUF0RkQsSUFzRkM7U0FoRlksOEJBQThCOzs7Ozs7SUFDekMsOENBQWtCOzs7OztJQUNsQixpREFBOEI7O0lBRTlCLHFEQUM4RDs7SUFDOUQsOENBQ21COzs7OztJQUdqQiw2Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bGluZXN0cmluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnlwb2x5Z29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeW11bHRpcG9pbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnltdWx0aWxpbmVzdHJpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlNdWx0aVBvbHlnb25Db21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnltdWx0aXBvbHlnb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICdvbC9wcm9qJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbGxlY3Rpb24tY29vcmRpbmF0ZXMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW9sLWNvbGxlY3Rpb24tY29vcmRpbmF0ZXNcIj48L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbkNvb3JkaW5hdGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIHByaXZhdGUgaG9zdDogYW55O1xyXG4gIHByaXZhdGUgbWFwU3JpZCA9ICdFUFNHOjM4NTcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlW10gfCBDb29yZGluYXRlW11bXSB8IENvb3JkaW5hdGVbXVtdW107XHJcbiAgQElucHV0KClcclxuICBzcmlkID0gJ0VQU0c6Mzg1Nyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TGluZXN0cmluZzogR2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlQb2x5Z29uOiBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeU11bHRpcG9pbnQ6IEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TXVsdGlsaW5lc3RyaW5nOiBHZW9tZXRyeU11bHRpTGluZXN0cmluZ0NvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TXVsdGlwb2x5Z29uOiBHZW9tZXRyeU11bHRpUG9seWdvbkNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgaWYgKCEhZ2VvbWV0cnlMaW5lc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5TGluZXN0cmluZztcclxuICAgIH0gZWxzZSBpZiAoISFnZW9tZXRyeVBvbHlnb24pIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlQb2x5Z29uO1xyXG4gICAgfSBlbHNlIGlmICghIWdlb21ldHJ5TXVsdGlwb2ludCkge1xyXG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeU11bHRpcG9pbnQ7XHJcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlNdWx0aWxpbmVzdHJpbmcpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlNdWx0aWxpbmVzdHJpbmc7XHJcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlNdWx0aXBvbHlnb24pIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlNdWx0aXBvbHlnb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1jb2xsZWN0aW9uLWNvb3JkaW5hdGVzIG11c3QgYmUgYSBjaGlsZCBvZiBhIGdlb21ldHJ5IGNvbXBvbmVudCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5vbignY2hhbmdlOnZpZXcnLCBlID0+IHRoaXMub25NYXBWaWV3Q2hhbmdlZChlKSk7XHJcbiAgICB0aGlzLm1hcFNyaWQgPSB0aGlzLm1hcC5pbnN0YW5jZVxyXG4gICAgICAuZ2V0VmlldygpXHJcbiAgICAgIC5nZXRQcm9qZWN0aW9uKClcclxuICAgICAgLmdldENvZGUoKTtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25NYXBWaWV3Q2hhbmdlZChldmVudCkge1xyXG4gICAgdGhpcy5tYXBTcmlkID0gZXZlbnQudGFyZ2V0XHJcbiAgICAgIC5nZXQoZXZlbnQua2V5KVxyXG4gICAgICAuZ2V0UHJvamVjdGlvbigpXHJcbiAgICAgIC5nZXRDb2RlKCk7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYW5zZm9ybUNvb3JkaW5hdGVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXM6IENvb3JkaW5hdGVbXSB8IENvb3JkaW5hdGVbXVtdIHwgQ29vcmRpbmF0ZVtdW11bXTtcclxuXHJcbiAgICBpZiAodGhpcy5zcmlkID09PSB0aGlzLm1hcFNyaWQpIHtcclxuICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuaG9zdC5jb21wb25lbnRUeXBlKSB7XHJcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbGluZXN0cmluZyc6XHJcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbXVsdGlwb2ludCc6XHJcbiAgICAgICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gKDxDb29yZGluYXRlW10+dGhpcy5jb29yZGluYXRlcykubWFwKGMgPT4gdHJhbnNmb3JtKGMsIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdnZW9tZXRyeS1wb2x5Z29uJzpcclxuICAgICAgICBjYXNlICdnZW9tZXRyeS1tdWx0aWxpbmVzdHJpbmcnOlxyXG4gICAgICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9ICg8Q29vcmRpbmF0ZVtdW10+dGhpcy5jb29yZGluYXRlcykubWFwKGNjID0+XHJcbiAgICAgICAgICAgIGNjLm1hcChjID0+IHRyYW5zZm9ybShjLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCkpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbXVsdGlwb2x5Z29uJzpcclxuICAgICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSAoPENvb3JkaW5hdGVbXVtdW10+dGhpcy5jb29yZGluYXRlcykubWFwKGNjYyA9PlxyXG4gICAgICAgICAgICBjY2MubWFwKGNjID0+IGNjLm1hcChjID0+IHRyYW5zZm9ybShjLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCkpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldENvb3JkaW5hdGVzKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xyXG4gIH1cclxufVxyXG4iXX0=