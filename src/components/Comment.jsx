import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, deleteComment }) {
    function handleDeleteComment() {
        console.log('Deletar')
        deleteComment(content)
    }
    
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Kadugrizzo.png" alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                         <div className={styles.authorAndTime}>
                          <strong>Henrique Grizzo Bernini</strong>
                          <time title="13 de outubro as 12:56" dateTime="2022-10-10 14:23:00">Cerca de 1h atrás</time>
                        </div>
                        
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

             <footer>
                <button>
                 <ThumbsUp />
                   Aplaudir <span>20</span>
                </button>
              </footer>
            </div>
        </div>
    )    
}