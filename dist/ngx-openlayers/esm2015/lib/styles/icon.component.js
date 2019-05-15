/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Host } from '@angular/core';
import { Icon } from 'ol/style';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import IconOrigin from 'ol/style/IconOrigin';
import { StyleComponent } from './style.component';
export class StyleIconComponent {
    /**
     * @param {?} host
     */
    constructor(host) {
        this.host = host;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('creating ol.style.Icon instance with: ', this);
        this.instance = new Icon(this);
        this.host.instance.setImage(this.instance);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
}
StyleIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style-icon',
                template: `
    <div class="aol-style-icon"></div>
  `,
            },] },
];
/** @nocollapse */
StyleIconComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Host }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLGVBQWUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFRbkQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQXNDN0IsWUFBNEIsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7SUFBRyxDQUFDOzs7O0lBRXBELFFBQVE7UUFDTiwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsZ0VBQWdFO0lBQ2xFLENBQUM7OztZQXZFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs7WUFQUSxjQUFjLHVCQThDUixJQUFJOzs7cUJBbkNoQixLQUFLOzJCQUVMLEtBQUs7MkJBRUwsS0FBSzsyQkFFTCxLQUFLO29CQUVMLEtBQUs7MEJBRUwsS0FBSztrQkFFTCxLQUFLO3FCQUVMLEtBQUs7MkJBRUwsS0FBSztzQkFFTCxLQUFLO29CQUVMLEtBQUs7MEJBRUwsS0FBSzs2QkFFTCxLQUFLO3VCQUVMLEtBQUs7bUJBRUwsS0FBSztzQkFFTCxLQUFLO2tCQUVMLEtBQUs7Ozs7SUFsQ04sc0NBQXNCOztJQUV0QixvQ0FDeUI7O0lBQ3pCLDBDQUM4Qjs7SUFDOUIsMENBQzhCOztJQUM5QiwwQ0FDeUI7O0lBQ3pCLG1DQUN3Qzs7SUFDeEMseUNBQ3dCOztJQUN4QixpQ0FDWTs7SUFDWixvQ0FDeUI7O0lBQ3pCLDBDQUN5Qjs7SUFDekIscUNBQ2dCOztJQUNoQixtQ0FDYzs7SUFDZCx5Q0FDcUI7O0lBQ3JCLDRDQUN3Qjs7SUFDeEIsc0NBQ2lCOztJQUNqQixrQ0FDdUI7O0lBQ3ZCLHFDQUMwQjs7SUFDMUIsaUNBQ1k7Ozs7O0lBRUEsa0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IEljb25BbmNob3JVbml0cyBmcm9tICdvbC9zdHlsZS9JY29uQW5jaG9yVW5pdHMnO1xyXG5pbXBvcnQgSWNvbk9yaWdpbiBmcm9tICdvbC9zdHlsZS9JY29uT3JpZ2luJztcclxuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS1pY29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFvbC1zdHlsZS1pY29uXCI+PC9kaXY+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0eWxlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IEljb247XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYW5jaG9yOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gIEBJbnB1dCgpXHJcbiAgYW5jaG9yWFVuaXRzOiBJY29uQW5jaG9yVW5pdHM7XHJcbiAgQElucHV0KClcclxuICBhbmNob3JZVW5pdHM6IEljb25BbmNob3JVbml0cztcclxuICBASW5wdXQoKVxyXG4gIGFuY2hvck9yaWdpbjogSWNvbk9yaWdpbjtcclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luOiBJY29uT3JpZ2luO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1nOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBvZmZzZXQ6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgQElucHV0KClcclxuICBvZmZzZXRPcmlnaW46IEljb25PcmlnaW47XHJcbiAgQElucHV0KClcclxuICBvcGFjaXR5OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzY2FsZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgc25hcFRvUGl4ZWw6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICByb3RhdGVXaXRoVmlldzogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHJvdGF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzaXplOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1nU2l6ZTogW251bWJlciwgbnVtYmVyXTtcclxuICBASW5wdXQoKVxyXG4gIHNyYzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLkljb24gaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEljb24odGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ29wYWNpdHknXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldE9wYWNpdHkoY2hhbmdlc1snb3BhY2l0eSddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1sncm90YXRpb24nXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJvdGF0aW9uKGNoYW5nZXNbJ3JvdGF0aW9uJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydzY2FsZSddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0U2NhbGUoY2hhbmdlc1snc2NhbGUnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3NyYyddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSWNvbih0aGlzKTtcclxuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLWljb246ICcsIGNoYW5nZXMpO1xyXG4gIH1cclxufVxyXG4iXX0=