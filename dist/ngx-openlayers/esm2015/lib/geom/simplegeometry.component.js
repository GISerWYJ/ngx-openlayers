/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
/**
 * @abstract
 */
export class SimpleGeometryComponent {
    /**
     * @param {?} map
     * @param {?} host
     */
    constructor(map, host) {
        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.host.instance.setGeometry(this.instance);
    }
}
SimpleGeometryComponent.propDecorators = {
    srid: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SimpleGeometryComponent.prototype.instance;
    /** @type {?} */
    SimpleGeometryComponent.prototype.componentType;
    /** @type {?} */
    SimpleGeometryComponent.prototype.srid;
    /**
     * @type {?}
     * @protected
     */
    SimpleGeometryComponent.prototype.map;
    /**
     * @type {?}
     * @protected
     */
    SimpleGeometryComponent.prototype.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvZ2VvbS9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFLOUMsTUFBTSxPQUFnQix1QkFBdUI7Ozs7O0lBTTNDLFlBQXNCLEdBQWlCLEVBQVksSUFBc0I7UUFBbkQsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFZLFNBQUksR0FBSixJQUFJLENBQWtCO1FBSmxFLGtCQUFhLEdBQUcsaUJBQWlCLENBQUM7SUFJbUMsQ0FBQzs7OztJQUU3RSxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7bUJBTkEsS0FBSzs7OztJQUhOLDJDQUFnQzs7SUFDaEMsZ0RBQXlDOztJQUV6Qyx1Q0FBc0I7Ozs7O0lBRVYsc0NBQTJCOzs7OztJQUFFLHVDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCBTaW1wbGVHZW9tZXRyeSBmcm9tICdvbC9nZW9tL1NpbXBsZUdlb21ldHJ5JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBTaW1wbGVHZW9tZXRyeTtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzaW1wbGUtZ2VvbWV0cnknO1xyXG5cclxuICBASW5wdXQoKSBzcmlkOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtYXA6IE1hcENvbXBvbmVudCwgcHJvdGVjdGVkIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEdlb21ldHJ5KHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=