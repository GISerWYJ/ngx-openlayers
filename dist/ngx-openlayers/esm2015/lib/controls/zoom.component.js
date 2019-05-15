/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Zoom } from 'ol/control';
import { MapComponent } from '../map.component';
export class ControlZoomComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoom');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new Zoom(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-zoom');
        this.map.instance.removeControl(this.instance);
    }
}
ControlZoomComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-zoom',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ControlZoomComponent.ctorParameters = () => [
    { type: MapComponent }
];
ControlZoomComponent.propDecorators = {
    duration: [{ type: Input }],
    zoomInLabel: [{ type: Input }],
    zoomOutLabel: [{ type: Input }],
    zoomInTipLabel: [{ type: Input }],
    zoomOutTipLabel: [{ type: Input }],
    delta: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlZoomComponent.prototype.instance;
    /** @type {?} */
    ControlZoomComponent.prototype.duration;
    /** @type {?} */
    ControlZoomComponent.prototype.zoomInLabel;
    /** @type {?} */
    ControlZoomComponent.prototype.zoomOutLabel;
    /** @type {?} */
    ControlZoomComponent.prototype.zoomInTipLabel;
    /** @type {?} */
    ControlZoomComponent.prototype.zoomOutTipLabel;
    /** @type {?} */
    ControlZoomComponent.prototype.delta;
    /**
     * @type {?}
     * @private
     */
    ControlZoomComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy96b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBUWhELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFnQi9CLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDbkMsOENBQThDO0lBQ2hELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7OztZQVBRLFlBQVk7Ozt1QkFXbEIsS0FBSzswQkFFTCxLQUFLOzJCQUVMLEtBQUs7NkJBRUwsS0FBSzs4QkFFTCxLQUFLO29CQUVMLEtBQUs7Ozs7SUFaTix3Q0FBZTs7SUFFZix3Q0FDaUI7O0lBQ2pCLDJDQUMyQjs7SUFDM0IsNENBQzRCOztJQUM1Qiw4Q0FDdUI7O0lBQ3ZCLCtDQUN3Qjs7SUFDeEIscUNBQ2M7Ozs7O0lBRUYsbUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWm9vbSB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtem9vbScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFpvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IFpvb207XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHpvb21JbkxhYmVsOiBzdHJpbmcgfCBOb2RlO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbU91dExhYmVsOiBzdHJpbmcgfCBOb2RlO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbUluVGlwTGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHpvb21PdXRUaXBMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGVsdGE6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvbnRyb2wtem9vbScpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFpvb20odGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtem9vbScpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19