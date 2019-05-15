/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Optional, Input } from '@angular/core';
import { transform } from 'ol/proj';
import { MapComponent } from './map.component';
import { GeometryPointComponent } from './geom/geometrypoint.component';
import { GeometryCircleComponent } from './geom/geometrycircle.component';
import { ViewComponent } from './view.component';
import { OverlayComponent } from './overlay.component';
var CoordinateComponent = /** @class */ (function () {
    function CoordinateComponent(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
        this.map = map;
        this.mapSrid = 'EPSG:3857';
        this.srid = 'EPSG:3857';
        // console.log('instancing aol-coordinate');
        if (geometryPointHost !== null) {
            this.host = geometryPointHost;
        }
        else if (geometryCircleHost !== null) {
            this.host = geometryCircleHost;
        }
        else if (viewHost !== null) {
            this.host = viewHost;
        }
        else if (overlayHost !== null) {
            this.host = overlayHost;
        }
    }
    /**
     * @return {?}
     */
    CoordinateComponent.prototype.ngOnInit = /**
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
    CoordinateComponent.prototype.ngOnChanges = /**
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
    CoordinateComponent.prototype.onMapViewChanged = /**
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
    CoordinateComponent.prototype.transformCoordinates = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var transformedCoordinates;
        if (this.srid === this.mapSrid) {
            transformedCoordinates = [this.x, this.y];
        }
        else {
            transformedCoordinates = transform([this.x, this.y], this.srid, this.mapSrid);
        }
        switch (this.host.componentType) {
            case 'geometry-point':
                this.host.instance.setCoordinates(transformedCoordinates);
                break;
            case 'geometry-circle':
            case 'view':
                this.host.instance.setCenter(transformedCoordinates);
                break;
            case 'overlay':
                this.host.instance.setPosition(transformedCoordinates);
                break;
        }
    };
    CoordinateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-coordinate',
                    template: "\n    <div class=\"aol-coordinate\"></div>\n  ",
                },] },
    ];
    /** @nocollapse */
    CoordinateComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: ViewComponent, decorators: [{ type: Optional }] },
        { type: GeometryPointComponent, decorators: [{ type: Optional }] },
        { type: GeometryCircleComponent, decorators: [{ type: Optional }] },
        { type: OverlayComponent, decorators: [{ type: Optional }] }
    ]; };
    CoordinateComponent.propDecorators = {
        x: [{ type: Input }],
        y: [{ type: Input }],
        srid: [{ type: Input }]
    };
    return CoordinateComponent;
}());
export { CoordinateComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CoordinateComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    CoordinateComponent.prototype.mapSrid;
    /** @type {?} */
    CoordinateComponent.prototype.x;
    /** @type {?} */
    CoordinateComponent.prototype.y;
    /** @type {?} */
    CoordinateComponent.prototype.srid;
    /**
     * @type {?}
     * @private
     */
    CoordinateComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb29yZGluYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQWEsS0FBSyxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQ7SUFpQkUsNkJBQ1UsR0FBaUIsRUFDYixRQUF1QixFQUN2QixpQkFBeUMsRUFDekMsa0JBQTJDLEVBQzNDLFdBQTZCO1FBSmpDLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFWbkIsWUFBTyxHQUFHLFdBQVcsQ0FBQztRQU85QixTQUFJLEdBQUcsV0FBVyxDQUFDO1FBU2pCLDRDQUE0QztRQUM1QyxJQUFJLGlCQUFpQixLQUFLLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1NBQy9CO2FBQU0sSUFBSSxrQkFBa0IsS0FBSyxJQUFJLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztTQUNoQzthQUFNLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztTQUN0QjthQUFNLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhOzs7O1FBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQXhCLENBQXdCLEVBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUTthQUM3QixPQUFPLEVBQUU7YUFDVCxhQUFhLEVBQUU7YUFDZixPQUFPLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVPLDhDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsS0FBSztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNO2FBQ3hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ2QsYUFBYSxFQUFFO2FBQ2YsT0FBTyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVPLGtEQUFvQjs7OztJQUE1Qjs7WUFDTSxzQkFBZ0M7UUFFcEMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDOUIsc0JBQXNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsc0JBQXNCLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDL0U7UUFFRCxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQy9CLEtBQUssZ0JBQWdCO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDMUQsTUFBTTtZQUNSLEtBQUssaUJBQWlCLENBQUM7WUFDdkIsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUNyRCxNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNO1NBQ1Q7SUFDSCxDQUFDOztnQkE5RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxnREFFVDtpQkFDRjs7OztnQkFYUSxZQUFZO2dCQUdaLGFBQWEsdUJBc0JqQixRQUFRO2dCQXhCSixzQkFBc0IsdUJBeUIxQixRQUFRO2dCQXhCSix1QkFBdUIsdUJBeUIzQixRQUFRO2dCQXZCSixnQkFBZ0IsdUJBd0JwQixRQUFROzs7b0JBWlYsS0FBSztvQkFFTCxLQUFLO3VCQUVMLEtBQUs7O0lBaUVSLDBCQUFDO0NBQUEsQUEvRUQsSUErRUM7U0F6RVksbUJBQW1COzs7Ozs7SUFDOUIsbUNBQWtCOzs7OztJQUNsQixzQ0FBOEI7O0lBRTlCLGdDQUNVOztJQUNWLGdDQUNVOztJQUNWLG1DQUNtQjs7Ozs7SUFHakIsa0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCwgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeVBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5cG9pbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb29yZGluYXRlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFvbC1jb29yZGluYXRlXCI+PC9kaXY+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBob3N0OiBhbnk7XHJcbiAgcHJpdmF0ZSBtYXBTcmlkID0gJ0VQU0c6Mzg1Nyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgeDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgeTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3JpZCA9ICdFUFNHOjM4NTcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSB2aWV3SG9zdDogVmlld0NvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5UG9pbnRIb3N0OiBHZW9tZXRyeVBvaW50Q29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlDaXJjbGVIb3N0OiBHZW9tZXRyeUNpcmNsZUNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIG92ZXJsYXlIb3N0OiBPdmVybGF5Q29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29vcmRpbmF0ZScpO1xyXG4gICAgaWYgKGdlb21ldHJ5UG9pbnRIb3N0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5UG9pbnRIb3N0O1xyXG4gICAgfSBlbHNlIGlmIChnZW9tZXRyeUNpcmNsZUhvc3QgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlDaXJjbGVIb3N0O1xyXG4gICAgfSBlbHNlIGlmICh2aWV3SG9zdCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmhvc3QgPSB2aWV3SG9zdDtcclxuICAgIH0gZWxzZSBpZiAob3ZlcmxheUhvc3QgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gb3ZlcmxheUhvc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLm9uKCdjaGFuZ2U6dmlldycsIGUgPT4gdGhpcy5vbk1hcFZpZXdDaGFuZ2VkKGUpKTtcclxuICAgIHRoaXMubWFwU3JpZCA9IHRoaXMubWFwLmluc3RhbmNlXHJcbiAgICAgIC5nZXRWaWV3KClcclxuICAgICAgLmdldFByb2plY3Rpb24oKVxyXG4gICAgICAuZ2V0Q29kZSgpO1xyXG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1hcFZpZXdDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICB0aGlzLm1hcFNyaWQgPSBldmVudC50YXJnZXRcclxuICAgICAgLmdldChldmVudC5rZXkpXHJcbiAgICAgIC5nZXRQcm9qZWN0aW9uKClcclxuICAgICAgLmdldENvZGUoKTtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhbnNmb3JtQ29vcmRpbmF0ZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtZWRDb29yZGluYXRlczogbnVtYmVyW107XHJcblxyXG4gICAgaWYgKHRoaXMuc3JpZCA9PT0gdGhpcy5tYXBTcmlkKSB7XHJcbiAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSBbdGhpcy54LCB0aGlzLnldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IHRyYW5zZm9ybShbdGhpcy54LCB0aGlzLnldLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLmhvc3QuY29tcG9uZW50VHlwZSkge1xyXG4gICAgICBjYXNlICdnZW9tZXRyeS1wb2ludCc6XHJcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldENvb3JkaW5hdGVzKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdnZW9tZXRyeS1jaXJjbGUnOlxyXG4gICAgICBjYXNlICd2aWV3JzpcclxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Q2VudGVyKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdvdmVybGF5JzpcclxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0UG9zaXRpb24odHJhbnNmb3JtZWRDb29yZGluYXRlcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==