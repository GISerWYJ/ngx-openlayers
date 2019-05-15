/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { defaults } from 'ol/control';
import { Options as AttributionOptions } from 'ol/control/Attribution';
import { Options as RotateOptions } from 'ol/control/Rotate';
import { Options as ZoomOptions } from 'ol/control/Zoom';
import { MapComponent } from '../map.component';
export class DefaultControlComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('ol.control.defaults init: ', this);
        this.instance = defaults(this);
        this.instance.forEach((/**
         * @param {?} c
         * @return {?}
         */
        c => this.map.instance.addControl(c)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-defaults');
        this.instance.forEach((/**
         * @param {?} c
         * @return {?}
         */
        c => this.map.instance.removeControl(c)));
    }
}
DefaultControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-defaults',
                template: '',
            },] },
];
/** @nocollapse */
DefaultControlComponent.ctorParameters = () => [
    { type: MapComponent }
];
DefaultControlComponent.propDecorators = {
    attribution: [{ type: Input }],
    attributionOptions: [{ type: Input }],
    rotate: [{ type: Input }],
    rotateOptions: [{ type: Input }],
    zoom: [{ type: Input }],
    zoomOptions: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DefaultControlComponent.prototype.instance;
    /** @type {?} */
    DefaultControlComponent.prototype.attribution;
    /** @type {?} */
    DefaultControlComponent.prototype.attributionOptions;
    /** @type {?} */
    DefaultControlComponent.prototype.rotate;
    /** @type {?} */
    DefaultControlComponent.prototype.rotateOptions;
    /** @type {?} */
    DefaultControlComponent.prototype.zoom;
    /** @type {?} */
    DefaultControlComponent.prototype.zoomOptions;
    /**
     * @type {?}
     * @private
     */
    DefaultControlComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9kZWZhdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBVyxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFL0MsT0FBTyxFQUFFLE9BQU8sSUFBSSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxPQUFPLElBQUksYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sSUFBSSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNaEQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQWVsQyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQzs7OztJQUV6QyxRQUFRO1FBQ04sbURBQW1EO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUNqRSxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxFQUFFO2FBQ2I7Ozs7WUFMUSxZQUFZOzs7MEJBUWxCLEtBQUs7aUNBRUwsS0FBSztxQkFFTCxLQUFLOzRCQUVMLEtBQUs7bUJBRUwsS0FBSzswQkFFTCxLQUFLOzs7O0lBWE4sMkNBQThCOztJQUM5Qiw4Q0FDcUI7O0lBQ3JCLHFEQUN1Qzs7SUFDdkMseUNBQ2dCOztJQUNoQixnREFDNkI7O0lBQzdCLHVDQUNjOztJQUNkLDhDQUN5Qjs7Ozs7SUFFYixzQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sLCBkZWZhdWx0cyB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBPcHRpb25zIGFzIEF0dHJpYnV0aW9uT3B0aW9ucyB9IGZyb20gJ29sL2NvbnRyb2wvQXR0cmlidXRpb24nO1xyXG5pbXBvcnQgeyBPcHRpb25zIGFzIFJvdGF0ZU9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL1JvdGF0ZSc7XHJcbmltcG9ydCB7IE9wdGlvbnMgYXMgWm9vbU9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL1pvb20nO1xyXG5cclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWRlZmF1bHRzJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogQ29sbGVjdGlvbjxDb250cm9sPjtcclxuICBASW5wdXQoKVxyXG4gIGF0dHJpYnV0aW9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgYXR0cmlidXRpb25PcHRpb25zOiBBdHRyaWJ1dGlvbk9wdGlvbnM7XHJcbiAgQElucHV0KClcclxuICByb3RhdGU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICByb3RhdGVPcHRpb25zOiBSb3RhdGVPcHRpb25zO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHpvb21PcHRpb25zOiBab29tT3B0aW9ucztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnb2wuY29udHJvbC5kZWZhdWx0cyBpbml0OiAnLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBkZWZhdWx0cyh0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaChjID0+IHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2woYykpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtZGVmYXVsdHMnKTtcclxuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaChjID0+IHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2woYykpO1xyXG4gIH1cclxufVxyXG4iXX0=