/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { Extent } from 'ol/extent';
/**
 * @abstract
 */
export class LayerComponent {
    /**
     * @param {?} host
     */
    constructor(host) {
        this.host = host;
        this.componentType = 'layer';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.precompose !== null && this.precompose !== undefined) {
            this.instance.on('precompose', this.precompose);
        }
        if (this.postcompose !== null && this.postcompose !== undefined) {
            this.instance.on('postcompose', this.postcompose);
        }
        this.host.instance.getLayers().push(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.host.instance.getLayers().remove(this.instance);
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
                properties[key] = changes[key].currentValue;
                if (key === 'precompose') {
                    this.instance.un('precompose', changes[key].previousValue);
                    this.instance.on('precompose', changes[key].currentValue);
                }
                if (key === 'postcompose') {
                    this.instance.un('postcompose', changes[key].previousValue);
                    this.instance.on('postcompose', changes[key].currentValue);
                }
            }
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
}
LayerComponent.propDecorators = {
    opacity: [{ type: Input }],
    visible: [{ type: Input }],
    extent: [{ type: Input }],
    zIndex: [{ type: Input }],
    minResolution: [{ type: Input }],
    maxResolution: [{ type: Input }],
    precompose: [{ type: Input }],
    postcompose: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LayerComponent.prototype.instance;
    /** @type {?} */
    LayerComponent.prototype.componentType;
    /** @type {?} */
    LayerComponent.prototype.opacity;
    /** @type {?} */
    LayerComponent.prototype.visible;
    /** @type {?} */
    LayerComponent.prototype.extent;
    /** @type {?} */
    LayerComponent.prototype.zIndex;
    /** @type {?} */
    LayerComponent.prototype.minResolution;
    /** @type {?} */
    LayerComponent.prototype.maxResolution;
    /** @type {?} */
    LayerComponent.prototype.precompose;
    /** @type {?} */
    LayerComponent.prototype.postcompose;
    /**
     * @type {?}
     * @protected
     */
    LayerComponent.prototype.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvbGF5ZXJzL2xheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQyxLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBSW5GLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7QUFFbkMsTUFBTSxPQUFnQixjQUFjOzs7O0lBc0JsQyxZQUFzQixJQUF3QztRQUF4QyxTQUFJLEdBQUosSUFBSSxDQUFvQztRQXBCdkQsa0JBQWEsR0FBRyxPQUFPLENBQUM7SUFvQmtDLENBQUM7Ozs7SUFFbEUsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCOztjQUMxQixVQUFVLEdBQTZCLEVBQUU7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztnQkFDNUMsSUFBSSxHQUFHLEtBQUssWUFBWSxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUMzRDtnQkFDRCxJQUFJLEdBQUcsS0FBSyxhQUFhLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzVEO2FBQ0Y7U0FDRjtRQUNELHNGQUFzRjtRQUN0RixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7O3NCQXREQSxLQUFLO3NCQUVMLEtBQUs7cUJBRUwsS0FBSztxQkFFTCxLQUFLOzRCQUVMLEtBQUs7NEJBRUwsS0FBSzt5QkFHTCxLQUFLOzBCQUVMLEtBQUs7Ozs7SUFsQk4sa0NBQXFCOztJQUNyQix1Q0FBK0I7O0lBRS9CLGlDQUNnQjs7SUFDaEIsaUNBQ2lCOztJQUNqQixnQ0FDZTs7SUFDZixnQ0FDZTs7SUFDZix1Q0FDc0I7O0lBQ3RCLHVDQUNzQjs7SUFFdEIsb0NBQ2lDOztJQUNqQyxxQ0FDa0M7Ozs7O0lBRXRCLDhCQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnb2wvZXZlbnRzJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogYW55O1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2xheWVyJztcclxuXHJcbiAgQElucHV0KClcclxuICBvcGFjaXR5OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB2aXNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgZXh0ZW50OiBFeHRlbnQ7XHJcbiAgQElucHV0KClcclxuICB6SW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwcmVjb21wb3NlOiAoZXZ0OiBFdmVudCkgPT4gdm9pZDtcclxuICBASW5wdXQoKVxyXG4gIHBvc3Rjb21wb3NlOiAoZXZ0OiBFdmVudCkgPT4gdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGhvc3Q6IE1hcENvbXBvbmVudCB8IExheWVyR3JvdXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMucHJlY29tcG9zZSAhPT0gbnVsbCAmJiB0aGlzLnByZWNvbXBvc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdwcmVjb21wb3NlJywgdGhpcy5wcmVjb21wb3NlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBvc3Rjb21wb3NlICE9PSBudWxsICYmIHRoaXMucG9zdGNvbXBvc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0Y29tcG9zZScsIHRoaXMucG9zdGNvbXBvc2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLmdldExheWVycygpLnB1c2godGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5nZXRMYXllcnMoKS5yZW1vdmUodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICAgIGlmIChrZXkgPT09ICdwcmVjb21wb3NlJykge1xyXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS51bigncHJlY29tcG9zZScsIGNoYW5nZXNba2V5XS5wcmV2aW91c1ZhbHVlKTtcclxuICAgICAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ3ByZWNvbXBvc2UnLCBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ3Bvc3Rjb21wb3NlJykge1xyXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS51bigncG9zdGNvbXBvc2UnLCBjaGFuZ2VzW2tleV0ucHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0Y29tcG9zZScsIGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLWxheWVyLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==