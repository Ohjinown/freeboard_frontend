import style from "./detail.module.css";
import { getDate } from "../../../../commons/libraries/utils"

export default function BoardDetailUI({show, title, writer, contents, createdAt, onMouseOverLocation, onClickMove, onClickDelete}) {

    return(
        <div className={style.board}>
            <div className={style.board_box}>
                <div className={style.board_box_content}>
                    <div className={style.user_box}>
                        <div className={style.user_box_left}>
                            <div className={style.user_profile}>
                                <img src="/profile.png" alt="프로필 사진"/>
                            </div>
                            <div className={style.user_left_imfor}>
                                <p>{writer}</p>
                                <p>Date : {getDate(createdAt)}</p>
                            </div>
                        </div>
                        <div className={style.user_box_right}>
                            <div>
                                <img src="/link.png"/>
                            </div>
                            <div className={style.addressBox}>    
                                <img onMouseOver={onMouseOverLocation} src="/location.png"/>
                            </div>
                        </div>
                        {
                            show == true ? <div className={style.address}>
                            <div>
                                <p>서울특별시 영등포구 양산로 200</p>
                                <p>(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층</p>
                            </div>
                            <img src="/addressBox.png"/>
                        </div> : <div className={style.address}></div>
                        }
                    </div>
                    <div className={style.titleBox}>
                        <p>{title}</p>
                    </div>
                    <div className={style.imgBox}>
                        <img src="/image.png"/>
                    </div>
                    <div className={style.contentBox}><p>{contents}</p></div>
                    <div className={style.videoBox}>
                        <div><img src="/video.png"/></div>
                    </div>
                    <div className={style.likeBox}>
                        <div>
                            <div>
                                <img src="/thumb_up.png"/>
                            </div>
                            <div>
                                <img src="/thumb_down.png"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={style.btn_list}>
                    <div>
                        <button>목록으로</button>
                        <button onClick={onClickMove}>수정하러가기</button>
                        <button onClick={onClickDelete}>삭제하기</button>
                    </div>
                </div>
            </div>    
        </div>
    )
}