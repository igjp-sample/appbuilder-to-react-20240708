import { IgrButton, IgrButtonModule, IgrRipple, IgrRippleModule, IgrStep, IgrStepper, IgrStepperModule } from '@infragistics/igniteui-react';
import { useRef } from 'react';
import styles from './stteper.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrRippleModule.register();
IgrStepperModule.register();

export default function Stteper() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const stepper = useRef<IgrStepper>(null);

  return (
    <>
      <div className={classes("column-layout stteper-container")}>
        <div className={classes("column-layout group")}>
          <IgrButton size="large" className={classes("button")}>
            <span key={uuid()}>home</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
        </div>
        <div className={classes("column-layout group_1")}>
          <IgrStepper titlePosition="bottom" ref={stepper} className={classes("stepper")}>
            <IgrStep invalid="true" key={uuid()}>
              <div className={classes("column-layout step-content")} key={uuid()}>
                <p className={classes("typography__body-1 text")} key={uuid()}>
                  <span>プロセスを進めて行くステッパーコンポーネントです。インタラクションの「コンポーネント アクションの実行」のサンプルになります。</span>
                </p>
                <div className={classes("row-layout group_2")} key={uuid()}>
                  <IgrButton size="large" clicked={() => stepper?.current?.next()} className={classes("button_1")}>
                    <span key={uuid()}>Next</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </div>
              <p slot="title" key={uuid()}>Address</p>
            </IgrStep>
            <IgrStep invalid="true" key={uuid()}>
              <div className={classes("column-layout step-content")} key={uuid()}>
                <p className={classes("typography__body-1 text")} key={uuid()}>
                  <span>ステップ状況を管理します。</span>
                </p>
                <div className={classes("row-layout group_2")} key={uuid()}>
                  <IgrButton size="large" clicked={() => stepper?.current?.prev()} className={classes("button_1")}>
                    <span key={uuid()}>Prev</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton size="large" clicked={() => stepper?.current?.next()} className={classes("button_1")}>
                    <span key={uuid()}>Next</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </div>
              <p slot="title" key={uuid()}>Item</p>
            </IgrStep>
            <IgrStep optional="true" key={uuid()}>
              <div className={classes("column-layout step-content")} key={uuid()}>
                <p className={classes("typography__body-1 text")} key={uuid()}>
                  <span>ステップ終了です。</span>
                </p>
                <div className={classes("row-layout group_2")} key={uuid()}>
                  <IgrButton size="large" clicked={() => stepper?.current?.prev()} className={classes("button_1")}>
                    <span key={uuid()}>Prev</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton size="large" clicked={() => stepper?.current?.reset()} className={classes("button_1")}>
                    <span key={uuid()}>Reset</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </div>
              <p slot="title" key={uuid()}>Wrap</p>
              <p slot="subtitle" key={uuid()}>(Optional)</p>
            </IgrStep>
          </IgrStepper>
        </div>
      </div>
    </>
  );
}
