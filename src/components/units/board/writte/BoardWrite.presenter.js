import styles from "./Board.module.css"
import {Button} from "./BoardWrite.style"
export default function BoardWriteUI({isEdit, name, password, title, content, onChangeName, onChangePassword, onChangeTitle, onChangeContent, onClickBtn, onClickUpdate, errName, errPassword, errTitle, errContent, data}) {

    return(
        <div className={styles.board_box}>
            {/* 밑에 */}
            <div className={styles.board}>
                <div className={styles.board_content}>
                    <div className={styles.board_title}>
                        <p>게시물 {isEdit ? "수정" : "등록"}</p>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.name}>
                            <label htmlFor="name">작성자</label>
                            <input className={styles.boardInput} id="name" type="text" placeholder="이름을 적어주세요"  onChange={onChangeName} defaultValue={data?.fetchBoard.writer} readOnly={data?.fetchBoard.writer}/>
                            <p className={styles.errorMsg}>{errName}</p>
                        </div>
                        <div className={styles.password}>
                            <label htmlFor="password">비밀번호</label>
                            <input className={styles.boardInput} id="password" type="password" placeholder="비밀번호를 입력해주세요"  onChange={onChangePassword}/>
                            <p className={styles.errorMsg}>{errPassword}</p>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <p className={styles.title_01}>제목</p>
                        <input className={styles.boardInput} type="text" placeholder="제목을 입력해주세요" onChange={onChangeTitle} defaultValue={data?.fetchBoard.title}/>
                        <p className={styles.errorMsg}>{errTitle}</p>
                    </div>
                    <div className={styles.content}>
                        <p>내용</p>
                        <textarea placeholder="내용을 작성해주세요" onChange={onChangeContent} defaultValue={data?.fetchBoard.contents}></textarea>
                        <p className={styles.errorMsg}>{errContent}</p>
                    </div>
                    <div className={styles.address_box}>
                        <p>주소</p>
                        <div className={styles.address}>
                            <input className={styles.address_number} type="number"/>
                            <div>
                                <input className={styles.address_serch_btn} type="button" value="우편번호 검색"/>
                            </div>
                        </div>
                        <div className={styles.address_box_input}>    
                            <input type="text"/>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className={styles.youtube_box}>
                        <p>유튜브</p>
                        <input type="text" placeholder="링크를 작성해주세요"/>
                    </div>
                    <div className={styles.flie_box}>
                        <p>사진 첨부</p>
                        <div className={styles.file_box_upload}>
                            <input type="file"/>
                            <input type="file"/>
                            <input type="file"/>
                        </div>
                    </div>
                    <div className={styles.main_set}>
                        <p>메인 설정</p>
                        <div className={styles.main_set_content}>
                            <input type="radio" id="유튜브"/>
                            <label htmlFor="유튜브">유튜브</label>
                            <input type="radio" id="사진"/>
                            <label htmlFor="사진">사진</label>
                        </div>
                    </div>
                    <div className={styles.insert_btn_box}>
                        <Button onClick={isEdit ? onClickUpdate : onClickBtn} name={name} password={password} title={title} content={content}>{isEdit ? "수정": "등록"}하기</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}