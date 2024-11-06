import Link from "next/link"
import styles from "./Hoome.module.css";
export default  function home()
{
    return (
        <>       
        <div className={styles.container}> 
    <h1 className={styles.logo}>welcome </h1>
   <Link href=" /home" > go to home
      </Link>

      <>

        <Link href=" /about" >go to about
        </Link>
      </>
      <>
      <Link href=" /services" >go to services

        </Link>
      </>
      <>
      <Link href=" /settings" >go to settings

        </Link>
      </>
      
   
</div>
        <h1 className={styles.hoome}> home page </h1>
        <Link href="/" className={styles.new}>
        <button> back </button></Link>
        
        

        </>
        

    )

}


