import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrCheckbox, IgrCheckboxModule, IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './login-success.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrCheckboxModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default function LoginSuccess() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const loginCheck = queryParams.get('LoginCheck') != null
    ? queryParams.get('LoginCheck') === 'true'
    : false;
  const loginPassword = queryParams.get('LoginPassword') ?? '空白';
  const loginEmail = queryParams.get('LoginEmail') ?? '空白';
  const [loginCheck, setLoginCheck] = useState<boolean | undefined>(false);

  return (
    <>
      <div className={classes("column-layout login-success-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <IgrButton size="large" clicked={() => navigate(`/login`)} className={classes("button")}>
              <span key={uuid()}>Back</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <h5 className={classes("content")}>
              <span></span>
            </h5>
            <p className={classes("typography__body-1 text")}>
              <span></span>
            </p>
            <p className={classes("typography__body-1 content")}>
              <span>遷移後のこのビューに対してルートパラメーター（Email, Password, Checkbox）を設定します。このページでは受信したルートパラメーターの値を表示しています。ルートパラメーターへ値をセットする部分は遷移前ページで設定します。</span>
            </p>
          </div>
        </div>
        <div className={classes("column-layout group_2")}>
          <IgrCard elevated="true" className={classes("card")}>
            <div className={classes("group_3")} key={uuid()}>
              <IgrCardHeader>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar shape="circle" key={uuid()}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>person</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>{loginEmail}</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>{loginPassword}</span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <p className={classes("typography__body-1 text_1")} key={uuid()}>
                  <span>{loginCheck}</span>
                </p>
                <IgrCheckbox labelPosition="after" checked={loginCheck} change={(_c, e) => setLoginCheck(e.detail)} className={classes("checkbox")} key={uuid()}>
                  <span key={uuid()}>チェック状態</span>
                </IgrCheckbox>
              </IgrCardContent>
              <IgrCardActions className={classes("actions-content")}>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>favorite</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>bookmark</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
              </IgrCardActions>
            </div>
            <IgrCardMedia className={classes("media-content")} key={uuid()}>
              <img src="/src/assets/Avatar5.png" className={classes("image")} key={uuid()} />
            </IgrCardMedia>
          </IgrCard>
        </div>
      </div>
    </>
  );
}
