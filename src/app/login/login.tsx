import { IgrButton, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrCheckboxModule.register();
IgrInputModule.register();
IgrRippleModule.register();

export default function Login() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const [_loginpassword, set_loginpassword] = useState<string | undefined>();
  const [_logincheck, set_logincheck] = useState<boolean | undefined>(false);
  const [_loginemail, set_loginemail] = useState<string | undefined>();

  return (
    <>
      <div className={classes("row-layout login-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <h4 className={classes("h4")}>
              <span>System Login</span>
            </h4>
            <p className={classes("typography__body-1 text")}>
              <span>ログインフォームのサンプル画面です。この画面では遷移先（子ビュー）に設定済みのルートパラメーターに対して値をセットして送信します。</span>
            </p>
            <IgrInput type="email" value={_loginemail} label="Email address" placeholder="test@infragistics.com" outlined="false" change={(_c, e) => set_loginemail(e.detail)} className={classes("input")}></IgrInput>
            <IgrInput type="password" value={_loginpassword} label="Password" placeholder="英数8文字以上でご入力ください" outlined="false" change={(_c, e) => set_loginpassword(e.detail)} className={classes("input")}></IgrInput>
            <div style={{display: 'contents'}} onClick={() => set_logincheck(true)}>
              <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
                <span key={uuid()}>チェックボックス</span>
              </IgrCheckbox>
            </div>
            <div className={classes("row-layout group_2")}>
              <IgrButton size="large" className={classes("button")}>
                <span key={uuid()}>home</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <div className={classes("column-layout group_3")}>
                <IgrButton size="large" clicked={() => navigate(`/login-success?LoginEmail=${_loginemail!}&LoginPassword=${_loginpassword!}&LoginCheck=${_logincheck}`)} className={classes("button_1")}>
                  <span key={uuid()}>Login</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
          </div>
        </div>
        <div className={classes("column-layout group_4")}>
          <img src="/src/assets/SketchParser.png" className={classes("image")} />
        </div>
      </div>
    </>
  );
}
