/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import View from 'ol/View';
import { MapComponent } from './map.component';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
export class ViewComponent {
    /**
     * @param {?} host
     */
    constructor(host) {
        this.host = host;
        this.componentType = 'view';
        this.zoomAnimation = false;
        this.onChangeZoom = new EventEmitter();
        this.onChangeResolution = new EventEmitter();
        this.onChangeCenter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('creating ol.View instance with: ', this);
        this.instance = new View(this);
        this.host.instance.setView(this.instance);
        this.instance.on('change:zoom', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChangeZoom.emit(event)));
        this.instance.on('change:resolution', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChangeResolution.emit(event)));
        this.instance.on('change:center', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChangeCenter.emit(event)));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'zoom':
                        /** Work-around: setting the zoom via setProperties does not work. */
                        if (this.zoomAnimation) {
                            this.instance.animate({ zoom: changes[key].currentValue });
                        }
                        else {
                            this.instance.setZoom(changes[key].currentValue);
                        }
                        break;
                    case 'projection':
                        this.instance = new View(this);
                        this.host.instance.setView(this.instance);
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-view, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-view');
    }
}
ViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-view',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ViewComponent.ctorParameters = () => [
    { type: MapComponent }
];
ViewComponent.propDecorators = {
    constrainRotation: [{ type: Input }],
    enableRotation: [{ type: Input }],
    extent: [{ type: Input }],
    maxResolution: [{ type: Input }],
    minResolution: [{ type: Input }],
    maxZoom: [{ type: Input }],
    minZoom: [{ type: Input }],
    resolution: [{ type: Input }],
    resolutions: [{ type: Input }],
    rotation: [{ type: Input }],
    zoom: [{ type: Input }],
    zoomFactor: [{ type: Input }],
    center: [{ type: Input }],
    projection: [{ type: Input }],
    zoomAnimation: [{ type: Input }],
    onChangeZoom: [{ type: Output }],
    onChangeResolution: [{ type: Output }],
    onChangeCenter: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ViewComponent.prototype.instance;
    /** @type {?} */
    ViewComponent.prototype.componentType;
    /** @type {?} */
    ViewComponent.prototype.constrainRotation;
    /** @type {?} */
    ViewComponent.prototype.enableRotation;
    /** @type {?} */
    ViewComponent.prototype.extent;
    /** @type {?} */
    ViewComponent.prototype.maxResolution;
    /** @type {?} */
    ViewComponent.prototype.minResolution;
    /** @type {?} */
    ViewComponent.prototype.maxZoom;
    /** @type {?} */
    ViewComponent.prototype.minZoom;
    /** @type {?} */
    ViewComponent.prototype.resolution;
    /** @type {?} */
    ViewComponent.prototype.resolutions;
    /** @type {?} */
    ViewComponent.prototype.rotation;
    /** @type {?} */
    ViewComponent.prototype.zoom;
    /** @type {?} */
    ViewComponent.prototype.zoomFactor;
    /** @type {?} */
    ViewComponent.prototype.center;
    /** @type {?} */
    ViewComponent.prototype.projection;
    /** @type {?} */
    ViewComponent.prototype.zoomAnimation;
    /** @type {?} */
    ViewComponent.prototype.onChangeZoom;
    /** @type {?} */
    ViewComponent.prototype.onChangeResolution;
    /** @type {?} */
    ViewComponent.prototype.onChangeCenter;
    /**
     * @type {?}
     * @private
     */
    ViewComponent.prototype.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi92aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxJQUFJLE1BQU0sU0FBUyxDQUFDO0FBQzNCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRM0MsTUFBTSxPQUFPLGFBQWE7Ozs7SUEwQ3hCLFlBQW9CLElBQWtCO1FBQWxCLFNBQUksR0FBSixJQUFJLENBQWM7UUF4Qy9CLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBK0I5QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUd0QixpQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO1FBRTFFLHVCQUFrQixHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO1FBRWhGLG1CQUFjLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7SUFFbkMsQ0FBQzs7OztJQUUxQyxRQUFRO1FBQ04seURBQXlEO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhOzs7O1FBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLG1CQUFtQjs7OztRQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWU7Ozs7UUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7SUFDN0YsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7O2NBQzFCLFVBQVUsR0FBNkIsRUFBRTtRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUN6QixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLFFBQVEsR0FBRyxFQUFFO29CQUNYLEtBQUssTUFBTTt3QkFDVCxxRUFBcUU7d0JBQ3JFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTs0QkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7eUJBQzVEOzZCQUFNOzRCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzt5QkFDbEQ7d0JBQ0QsTUFBTTtvQkFDUixLQUFLLFlBQVk7d0JBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDMUMsTUFBTTtvQkFDUjt3QkFDRSxNQUFNO2lCQUNUO2dCQUNELFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO2FBQzdDO1NBQ0Y7UUFDRCxxRkFBcUY7UUFDckYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1Qsb0NBQW9DO0lBQ3RDLENBQUM7OztZQTVGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7O1lBVlEsWUFBWTs7O2dDQWVsQixLQUFLOzZCQUVMLEtBQUs7cUJBRUwsS0FBSzs0QkFFTCxLQUFLOzRCQUVMLEtBQUs7c0JBRUwsS0FBSztzQkFFTCxLQUFLO3lCQUVMLEtBQUs7MEJBRUwsS0FBSzt1QkFFTCxLQUFLO21CQUVMLEtBQUs7eUJBRUwsS0FBSztxQkFFTCxLQUFLO3lCQUVMLEtBQUs7NEJBRUwsS0FBSzsyQkFHTCxNQUFNO2lDQUVOLE1BQU07NkJBRU4sTUFBTTs7OztJQXRDUCxpQ0FBc0I7O0lBQ3RCLHNDQUE4Qjs7SUFFOUIsMENBQ29DOztJQUNwQyx1Q0FDd0I7O0lBQ3hCLCtCQUNlOztJQUNmLHNDQUNzQjs7SUFDdEIsc0NBQ3NCOztJQUN0QixnQ0FDZ0I7O0lBQ2hCLGdDQUNnQjs7SUFDaEIsbUNBQ21COztJQUNuQixvQ0FDc0I7O0lBQ3RCLGlDQUNpQjs7SUFDakIsNkJBQ2E7O0lBQ2IsbUNBQ21COztJQUNuQiwrQkFDbUI7O0lBQ25CLG1DQUNtQjs7SUFDbkIsc0NBQ3NCOztJQUV0QixxQ0FDMEU7O0lBQzFFLDJDQUNnRjs7SUFDaEYsdUNBQzRFOzs7OztJQUVoRSw2QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgVmlldyBmcm9tICdvbC9WaWV3JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2JqZWN0RXZlbnQgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XHJcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXZpZXcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IFZpZXc7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAndmlldyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29uc3RyYWluUm90YXRpb246IGJvb2xlYW4gfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBlbmFibGVSb3RhdGlvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGV4dGVudDogRXh0ZW50O1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWluUmVzb2x1dGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF4Wm9vbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWluWm9vbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVzb2x1dGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVzb2x1dGlvbnM6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpXHJcbiAgcm90YXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHpvb21GYWN0b3I6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGNlbnRlcjogQ29vcmRpbmF0ZTtcclxuICBASW5wdXQoKVxyXG4gIHByb2plY3Rpb246IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHpvb21BbmltYXRpb24gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2Vab29tOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkNoYW5nZVJlc29sdXRpb246IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlQ2VudGVyOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLlZpZXcgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZpZXcodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Vmlldyh0aGlzLmluc3RhbmNlKTtcclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6em9vbScsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMub25DaGFuZ2Vab29tLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpyZXNvbHV0aW9uJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5vbkNoYW5nZVJlc29sdXRpb24uZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOmNlbnRlcicsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMub25DaGFuZ2VDZW50ZXIuZW1pdChldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgIGNhc2UgJ3pvb20nOlxyXG4gICAgICAgICAgICAvKiogV29yay1hcm91bmQ6IHNldHRpbmcgdGhlIHpvb20gdmlhIHNldFByb3BlcnRpZXMgZG9lcyBub3Qgd29yay4gKi9cclxuICAgICAgICAgICAgaWYgKHRoaXMuem9vbUFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuYW5pbWF0ZSh7IHpvb206IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRab29tKGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAncHJvamVjdGlvbic6XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlldyh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFZpZXcodGhpcy5pbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC12aWV3LCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtdmlldycpO1xyXG4gIH1cclxufVxyXG4iXX0=