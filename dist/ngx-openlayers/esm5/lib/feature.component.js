/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Feature } from 'ol';
import { SourceVectorComponent } from './sources/vector.component';
var FeatureComponent = /** @class */ (function () {
    function FeatureComponent(host) {
        this.host = host;
        this.componentType = 'feature';
    }
    /**
     * @return {?}
     */
    FeatureComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new Feature();
        if (this.id !== undefined) {
            this.instance.setId(this.id);
        }
        this.host.instance.addFeature(this.instance);
    };
    /**
     * @return {?}
     */
    FeatureComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.host.instance.removeFeature(this.instance);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FeatureComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.instance) {
            this.instance.setId(this.id);
        }
    };
    FeatureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-feature',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    FeatureComponent.ctorParameters = function () { return [
        { type: SourceVectorComponent }
    ]; };
    FeatureComponent.propDecorators = {
        id: [{ type: Input }]
    };
    return FeatureComponent;
}());
export { FeatureComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9mZWF0dXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FO0lBYUUsMEJBQW9CLElBQTJCO1FBQTNCLFNBQUksR0FBSixJQUFJLENBQXVCO1FBTnhDLGtCQUFhLEdBQUcsU0FBUyxDQUFDO0lBTWlCLENBQUM7Ozs7SUFFbkQsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHFDQUVUO2lCQUNGOzs7O2dCQVBRLHFCQUFxQjs7O3FCQVkzQixLQUFLOztJQXNCUix1QkFBQztDQUFBLEFBaENELElBZ0NDO1NBMUJZLGdCQUFnQjs7O0lBQzNCLHlDQUFpQzs7SUFDakMsb0NBQXlCOztJQUV6Qiw4QkFDZ0M7Ozs7O0lBRXBCLGdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgSW5wdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgU291cmNlVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2VzL3ZlY3Rvci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtZmVhdHVyZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2ZlYXR1cmUnO1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogRmVhdHVyZTtcclxuXHJcbiAgQElucHV0KClcclxuICBpZDogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IFNvdXJjZVZlY3RvckNvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEZlYXR1cmUoKTtcclxuICAgIGlmICh0aGlzLmlkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRJZCh0aGlzLmlkKTtcclxuICAgIH1cclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5hZGRGZWF0dXJlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UucmVtb3ZlRmVhdHVyZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0SWQodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==