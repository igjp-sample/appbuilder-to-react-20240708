import { IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useGetNowPlayingList } from '../hooks/movie-app-hooks';
import styles from './card.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrCardModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default function Card() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { movieAppNowPlaying } = useGetNowPlayingList();

  return (
    <>
      <div className={classes("column-layout card-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <IgrButton size="large" className={classes("button")}>
              <span key={uuid()}>home</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <p className={classes("typography__body-1 text")}>
              <span>1つの Card オブジェクトを「繰り返し：Data モード」により APIレコード数分だけ表示しているサンプルです。</span>
            </p>
          </div>
        </div>
        <div className={classes("column-layout group_2")}>
          <div className={classes("row-layout group_3")}>
            {movieAppNowPlaying?.map((item) => (
              <IgrCard elevated="true" className={classes("card")} key={uuid()}>
                <IgrCardHeader key={uuid()}>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>{item.Name}</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}>{item.Genre}</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardMedia className={classes("media-content")} key={uuid()}>
                  <img src={item.MoviePoster} className={classes("image")} key={uuid()} />
                </IgrCardMedia>
                <IgrCardActions className={classes("actions-content")} key={uuid()}>
                  <div style={{display: 'contents'}} slot="start" key={uuid()}>
                    <IgrButton variant="flat" size="large" className={classes("button_1")}>
                      <span key={uuid()}>Button</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
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
              </IgrCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
