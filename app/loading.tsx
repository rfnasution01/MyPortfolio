import { H1} from "@/components/headings";
import styles from "./loading.module.css";

export default function Loading() {
    return (
        <div
            style={{
                marginTop: '57px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '70vh',
            }}
        >
            <div className={styles.loadingDots}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <H1>Loading . . .</H1>
        </div>
    )
}