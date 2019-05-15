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
export class CoordinateComponent {
    /**
     * @param {?} map
     * @param {?} viewHost
     * @param {?} geometryPointHost
     * @param {?} geometryCircleHost
     * @param {?} overlayHost
     */
    constructor(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
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
    }
}
CoordinateComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-coordinate',
                template: `
    <div class="aol-coordinate"></div>
  `,
            },] },
];
/** @nocollapse */
CoordinateComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: ViewComponent, decorators: [{ type: Optional }] },
    { type: GeometryPointComponent, decorators: [{ type: Optional }] },
    { type: GeometryCircleComponent, decorators: [{ type: Optional }] },
    { type: OverlayComponent, decorators: [{ type: Optional }] }
];
CoordinateComponent.propDecorators = {
    x: [{ type: Input }],
    y: [{ type: Input }],
    srid: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb29yZGluYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQWEsS0FBSyxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFRdkQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7Ozs7SUFXOUIsWUFDVSxHQUFpQixFQUNiLFFBQXVCLEVBQ3ZCLGlCQUF5QyxFQUN6QyxrQkFBMkMsRUFDM0MsV0FBNkI7UUFKakMsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVZuQixZQUFPLEdBQUcsV0FBVyxDQUFDO1FBTzlCLFNBQUksR0FBRyxXQUFXLENBQUM7UUFTakIsNENBQTRDO1FBQzVDLElBQUksaUJBQWlCLEtBQUssSUFBSSxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7U0FDL0I7YUFBTSxJQUFJLGtCQUFrQixLQUFLLElBQUksRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO1NBQ2hDO2FBQU0sSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYTs7OztRQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVE7YUFDN0IsT0FBTyxFQUFFO2FBQ1QsYUFBYSxFQUFFO2FBQ2YsT0FBTyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxLQUFLO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU07YUFDeEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDZCxhQUFhLEVBQUU7YUFDZixPQUFPLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRU8sb0JBQW9COztZQUN0QixzQkFBZ0M7UUFFcEMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDOUIsc0JBQXNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsc0JBQXNCLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDL0U7UUFFRCxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQy9CLEtBQUssZ0JBQWdCO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDMUQsTUFBTTtZQUNSLEtBQUssaUJBQWlCLENBQUM7WUFDdkIsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUNyRCxNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNO1NBQ1Q7SUFDSCxDQUFDOzs7WUE5RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7O1lBWFEsWUFBWTtZQUdaLGFBQWEsdUJBc0JqQixRQUFRO1lBeEJKLHNCQUFzQix1QkF5QjFCLFFBQVE7WUF4QkosdUJBQXVCLHVCQXlCM0IsUUFBUTtZQXZCSixnQkFBZ0IsdUJBd0JwQixRQUFROzs7Z0JBWlYsS0FBSztnQkFFTCxLQUFLO21CQUVMLEtBQUs7Ozs7Ozs7SUFQTixtQ0FBa0I7Ozs7O0lBQ2xCLHNDQUE4Qjs7SUFFOUIsZ0NBQ1U7O0lBQ1YsZ0NBQ1U7O0lBQ1YsbUNBQ21COzs7OztJQUdqQixrQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9wdGlvbmFsLCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSAnb2wvcHJvaic7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdlb21ldHJ5UG9pbnRDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnlwb2ludC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeUNpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeWNpcmNsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXkuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvb3JkaW5hdGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW9sLWNvb3JkaW5hdGVcIj48L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBwcml2YXRlIGhvc3Q6IGFueTtcclxuICBwcml2YXRlIG1hcFNyaWQgPSAnRVBTRzozODU3JztcclxuXHJcbiAgQElucHV0KClcclxuICB4OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB5OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzcmlkID0gJ0VQU0c6Mzg1Nyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIHZpZXdIb3N0OiBWaWV3Q29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlQb2ludEhvc3Q6IEdlb21ldHJ5UG9pbnRDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeUNpcmNsZUhvc3Q6IEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgb3ZlcmxheUhvc3Q6IE92ZXJsYXlDb21wb25lbnRcclxuICApIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb29yZGluYXRlJyk7XHJcbiAgICBpZiAoZ2VvbWV0cnlQb2ludEhvc3QgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlQb2ludEhvc3Q7XHJcbiAgICB9IGVsc2UgaWYgKGdlb21ldHJ5Q2lyY2xlSG9zdCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeUNpcmNsZUhvc3Q7XHJcbiAgICB9IGVsc2UgaWYgKHZpZXdIb3N0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IHZpZXdIb3N0O1xyXG4gICAgfSBlbHNlIGlmIChvdmVybGF5SG9zdCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmhvc3QgPSBvdmVybGF5SG9zdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2Uub24oJ2NoYW5nZTp2aWV3JywgZSA9PiB0aGlzLm9uTWFwVmlld0NoYW5nZWQoZSkpO1xyXG4gICAgdGhpcy5tYXBTcmlkID0gdGhpcy5tYXAuaW5zdGFuY2VcclxuICAgICAgLmdldFZpZXcoKVxyXG4gICAgICAuZ2V0UHJvamVjdGlvbigpXHJcbiAgICAgIC5nZXRDb2RlKCk7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTWFwVmlld0NoYW5nZWQoZXZlbnQpIHtcclxuICAgIHRoaXMubWFwU3JpZCA9IGV2ZW50LnRhcmdldFxyXG4gICAgICAuZ2V0KGV2ZW50LmtleSlcclxuICAgICAgLmdldFByb2plY3Rpb24oKVxyXG4gICAgICAuZ2V0Q29kZSgpO1xyXG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2Zvcm1Db29yZGluYXRlcygpIHtcclxuICAgIGxldCB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzOiBudW1iZXJbXTtcclxuXHJcbiAgICBpZiAodGhpcy5zcmlkID09PSB0aGlzLm1hcFNyaWQpIHtcclxuICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IFt0aGlzLngsIHRoaXMueV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gdHJhbnNmb3JtKFt0aGlzLngsIHRoaXMueV0sIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMuaG9zdC5jb21wb25lbnRUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ2dlb21ldHJ5LXBvaW50JzpcclxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Q29vcmRpbmF0ZXModHJhbnNmb3JtZWRDb29yZGluYXRlcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2dlb21ldHJ5LWNpcmNsZSc6XHJcbiAgICAgIGNhc2UgJ3ZpZXcnOlxyXG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRDZW50ZXIodHJhbnNmb3JtZWRDb29yZGluYXRlcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ292ZXJsYXknOlxyXG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRQb3NpdGlvbih0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19