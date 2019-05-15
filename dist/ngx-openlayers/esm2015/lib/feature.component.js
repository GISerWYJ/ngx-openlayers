/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Feature } from 'ol';
import { SourceVectorComponent } from './sources/vector.component';
export class FeatureComponent {
    /**
     * @param {?} host
     */
    constructor(host) {
        this.host = host;
        this.componentType = 'feature';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new Feature();
        if (this.id !== undefined) {
            this.instance.setId(this.id);
        }
        this.host.instance.addFeature(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.host.instance.removeFeature(this.instance);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.instance) {
            this.instance.setId(this.id);
        }
    }
}
FeatureComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-feature',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
FeatureComponent.ctorParameters = () => [
    { type: SourceVectorComponent }
];
FeatureComponent.propDecorators = {
    id: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FeatureComponent.prototype.componentType;
    /** @type {?} */
    FeatureComponent.prototype.instance;
    /** @type {?} */
    FeatureComponent.prototype.id;
    /**
     * @type {?}
     * @private
     */
    FeatureComponent.prototype.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9mZWF0dXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBUW5FLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFPM0IsWUFBb0IsSUFBMkI7UUFBM0IsU0FBSSxHQUFKLElBQUksQ0FBdUI7UUFOeEMsa0JBQWEsR0FBRyxTQUFTLENBQUM7SUFNaUIsQ0FBQzs7OztJQUVuRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7O1lBUFEscUJBQXFCOzs7aUJBWTNCLEtBQUs7Ozs7SUFITix5Q0FBaUM7O0lBQ2pDLG9DQUF5Qjs7SUFFekIsOEJBQ2dDOzs7OztJQUVwQixnQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IFNvdXJjZVZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy92ZWN0b3IuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWZlYXR1cmUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdmZWF0dXJlJztcclxuICBwdWJsaWMgaW5zdGFuY2U6IEZlYXR1cmU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaWQ6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBTb3VyY2VWZWN0b3JDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBGZWF0dXJlKCk7XHJcbiAgICBpZiAodGhpcy5pZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0SWQodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuYWRkRmVhdHVyZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnJlbW92ZUZlYXR1cmUodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldElkKHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=