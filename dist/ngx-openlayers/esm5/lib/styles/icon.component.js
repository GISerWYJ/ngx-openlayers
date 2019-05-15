/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Host } from '@angular/core';
import { Icon } from 'ol/style';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import IconOrigin from 'ol/style/IconOrigin';
import { StyleComponent } from './style.component';
var StyleIconComponent = /** @class */ (function () {
    function StyleIconComponent(host) {
        this.host = host;
    }
    /**
     * @return {?}
     */
    StyleIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log('creating ol.style.Icon instance with: ', this);
        this.instance = new Icon(this);
        this.host.instance.setImage(this.instance);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StyleIconComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['opacity']) {
            this.instance.setOpacity(changes['opacity'].currentValue);
        }
        if (changes['rotation']) {
            this.instance.setRotation(changes['rotation'].currentValue);
        }
        if (changes['scale']) {
            this.instance.setScale(changes['scale'].currentValue);
        }
        if (changes['src']) {
            this.instance = new Icon(this);
            this.host.instance.setImage(this.instance);
        }
        this.host.update();
        // console.log('changes detected in aol-style-icon: ', changes);
    };
    StyleIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-style-icon',
                    template: "\n    <div class=\"aol-style-icon\"></div>\n  ",
                },] },
    ];
    /** @nocollapse */
    StyleIconComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Host }] }
    ]; };
    StyleIconComponent.propDecorators = {
        anchor: [{ type: Input }],
        anchorXUnits: [{ type: Input }],
        anchorYUnits: [{ type: Input }],
        anchorOrigin: [{ type: Input }],
        color: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        img: [{ type: Input }],
        offset: [{ type: Input }],
        offsetOrigin: [{ type: Input }],
        opacity: [{ type: Input }],
        scale: [{ type: Input }],
        snapToPixel: [{ type: Input }],
        rotateWithView: [{ type: Input }],
        rotation: [{ type: Input }],
        size: [{ type: Input }],
        imgSize: [{ type: Input }],
        src: [{ type: Input }]
    };
    return StyleIconComponent;
}());
export { StyleIconComponent };
if (false) {
    /** @type {?} */
    StyleIconComponent.prototype.instance;
    /** @type {?} */
    StyleIconComponent.prototype.anchor;
    /** @type {?} */
    StyleIconComponent.prototype.anchorXUnits;
    /** @type {?} */
    StyleIconComponent.prototype.anchorYUnits;
    /** @type {?} */
    StyleIconComponent.prototype.anchorOrigin;
    /** @type {?} */
    StyleIconComponent.prototype.color;
    /** @type {?} */
    StyleIconComponent.prototype.crossOrigin;
    /** @type {?} */
    StyleIconComponent.prototype.img;
    /** @type {?} */
    StyleIconComponent.prototype.offset;
    /** @type {?} */
    StyleIconComponent.prototype.offsetOrigin;
    /** @type {?} */
    StyleIconComponent.prototype.opacity;
    /** @type {?} */
    StyleIconComponent.prototype.scale;
    /** @type {?} */
    StyleIconComponent.prototype.snapToPixel;
    /** @type {?} */
    StyleIconComponent.prototype.rotateWithView;
    /** @type {?} */
    StyleIconComponent.prototype.rotation;
    /** @type {?} */
    StyleIconComponent.prototype.size;
    /** @type {?} */
    StyleIconComponent.prototype.imgSize;
    /** @type {?} */
    StyleIconComponent.prototype.src;
    /**
     * @type {?}
     * @private
     */
    StyleIconComponent.prototype.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLGVBQWUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUE0Q0UsNEJBQTRCLElBQW9CO1FBQXBCLFNBQUksR0FBSixJQUFJLENBQWdCO0lBQUcsQ0FBQzs7OztJQUVwRCxxQ0FBUTs7O0lBQVI7UUFDRSwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsZ0VBQWdFO0lBQ2xFLENBQUM7O2dCQXZFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGdEQUVUO2lCQUNGOzs7O2dCQVBRLGNBQWMsdUJBOENSLElBQUk7Ozt5QkFuQ2hCLEtBQUs7K0JBRUwsS0FBSzsrQkFFTCxLQUFLOytCQUVMLEtBQUs7d0JBRUwsS0FBSzs4QkFFTCxLQUFLO3NCQUVMLEtBQUs7eUJBRUwsS0FBSzsrQkFFTCxLQUFLOzBCQUVMLEtBQUs7d0JBRUwsS0FBSzs4QkFFTCxLQUFLO2lDQUVMLEtBQUs7MkJBRUwsS0FBSzt1QkFFTCxLQUFLOzBCQUVMLEtBQUs7c0JBRUwsS0FBSzs7SUErQlIseUJBQUM7Q0FBQSxBQXhFRCxJQXdFQztTQWxFWSxrQkFBa0I7OztJQUM3QixzQ0FBc0I7O0lBRXRCLG9DQUN5Qjs7SUFDekIsMENBQzhCOztJQUM5QiwwQ0FDOEI7O0lBQzlCLDBDQUN5Qjs7SUFDekIsbUNBQ3dDOztJQUN4Qyx5Q0FDd0I7O0lBQ3hCLGlDQUNZOztJQUNaLG9DQUN5Qjs7SUFDekIsMENBQ3lCOztJQUN6QixxQ0FDZ0I7O0lBQ2hCLG1DQUNjOztJQUNkLHlDQUNxQjs7SUFDckIsNENBQ3dCOztJQUN4QixzQ0FDaUI7O0lBQ2pCLGtDQUN1Qjs7SUFDdkIscUNBQzBCOztJQUMxQixpQ0FDWTs7Ozs7SUFFQSxrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgSWNvbkFuY2hvclVuaXRzIGZyb20gJ29sL3N0eWxlL0ljb25BbmNob3JVbml0cyc7XHJcbmltcG9ydCBJY29uT3JpZ2luIGZyb20gJ29sL3N0eWxlL0ljb25PcmlnaW4nO1xyXG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLWljb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLWljb25cIj48L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3R5bGVJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogSWNvbjtcclxuXHJcbiAgQElucHV0KClcclxuICBhbmNob3I6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgQElucHV0KClcclxuICBhbmNob3JYVW5pdHM6IEljb25BbmNob3JVbml0cztcclxuICBASW5wdXQoKVxyXG4gIGFuY2hvcllVbml0czogSWNvbkFuY2hvclVuaXRzO1xyXG4gIEBJbnB1dCgpXHJcbiAgYW5jaG9yT3JpZ2luOiBJY29uT3JpZ2luO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3Jvc3NPcmlnaW46IEljb25PcmlnaW47XHJcbiAgQElucHV0KClcclxuICBpbWc6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG9mZnNldDogW251bWJlciwgbnVtYmVyXTtcclxuICBASW5wdXQoKVxyXG4gIG9mZnNldE9yaWdpbjogSWNvbk9yaWdpbjtcclxuICBASW5wdXQoKVxyXG4gIG9wYWNpdHk6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHNjYWxlOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzbmFwVG9QaXhlbDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHJvdGF0ZVdpdGhWaWV3OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgcm90YXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHNpemU6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgQElucHV0KClcclxuICBpbWdTaXplOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3JjOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBob3N0OiBTdHlsZUNvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuSWNvbiBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSWNvbih0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snb3BhY2l0eSddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0T3BhY2l0eShjaGFuZ2VzWydvcGFjaXR5J10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydyb3RhdGlvbiddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Um90YXRpb24oY2hhbmdlc1sncm90YXRpb24nXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3NjYWxlJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRTY2FsZShjaGFuZ2VzWydzY2FsZSddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snc3JjJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJY29uKHRoaXMpO1xyXG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtaWNvbjogJywgY2hhbmdlcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==