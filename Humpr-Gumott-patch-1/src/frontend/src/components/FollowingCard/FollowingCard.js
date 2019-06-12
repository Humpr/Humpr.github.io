import React, { Component } from "react";
import style from "./FollowingCard.module.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon";

class FollowingCard extends Component {
    render() {
        return (
            <div className={style.card}>
                <div className={style.cardHeader}>
                    <ProfileIcon
                        containerClassName={style.cardProfileIconContainer}
                        className={style.cardProfileIcon}
                    />
                    <div className={style.cardUername}>Username</div>
                    <div className={style.cardIcons}>
                        <div className={style.iconDot}>·</div>
                        <div className={style.iconReHump}>[]</div>
                        <div className={style.iconHump}>&lt;3</div>
                    </div>
                </div>
                <div className={style.cardContentContainer}>
                    <div className={style.cardContent}>
                    </div>
                </div>
                <div className={style.cardDescription}>
                    Bacon ipsum dolor amet ham hock short loin capicola ground round leberkas.
                    Swine ribeye andouille corned beef.
                    Pork belly rump cow, pork bresaola shoulder burgdoggen cupim ham hock venison turducken alcatra jowl.
                    Short ribs meatloaf filet mignon doner kevin jowl tongue alcatra burgdoggen chicken.
                    Sirloin meatloaf salami spare ribs shoulder, bacon rump pastrami picanha frankfurter jerky.
                    Fatback flank ham hock pork belly.
                </div>
                <div className={style.cardTags}>
                    <div className={style.cardTag}>#bacon</div>
                    <div className={style.cardTag}>#lorem</div>
                    <div className={style.cardTag}>#ipsum</div>
                    <div className={style.cardTag}>#lookAtThisLongTag</div>
                    <div className={style.cardTag}>#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <div className={style.cardTag}>#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <div className={style.cardTag}>#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                </div>
            </div>
        );
    }
}

export default FollowingCard;
