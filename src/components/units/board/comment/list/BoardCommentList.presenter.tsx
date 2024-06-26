import React from 'react';
import Image from "next/image"
import style from "./list.module.css"
import profile from "../../../../../../public/profile.png"
import {getDate} from "../../../../../commons/libraries/utils"
import { IBoardCommentUI } from "./BoardComment.types"
import { Modal, Rate } from "antd"

export default function BoardCommentListUI (props: IBoardCommentUI) {
    return (
        <div className={style.board}>
            {
                props.isOpenDeleteModal && (
                    <Modal open={true} onOk={props.onClickDelete}>
                        <div>비빌번호 입력: </div>
                        <input type='password' onChange={props.onChangeDeletePassword}/>                        
                    </Modal>
                )
            }
            <div className={style.board_box}>
                {
                    props.data?.fetchBoardComments.map(list => 
                        <div key={list._id} className={style.board_box_comment}>
                            <div className={style.comment_profile}>
                                <Image src={profile}/>
                            </div>
                            <div className={style.comment_imformation}>
                                <div className={style.comment_imformation_box}>
                                    <div className={style.comment_imformation_box_top}>
                                        <p className={style.box_top_write}>{list.writer}</p>
                                        {/* <p className={style.box_top_rating}>{list.rating}</p> */}
                                        <Rate disabled defaultValue={list.rating}/>
                                    </div>
                                    <div className={style.comment_imformation_box_mid}>
                                        <p>{list.contents}</p>
                                    </div>
                                    <div className={style.comment_imformation_box_bottom}>
                                        {getDate(list.createdAt)}
                                    </div>
                                </div>
                            </div>         
                            <div className={style.comment_btn}>
                                <button>수정</button>
                                <button onClick={props.onClickDeleteModal} id={list._id}>삭제</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}