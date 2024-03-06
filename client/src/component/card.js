import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardUI(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ maxWidth: 345, margin: 1 }}
      style={{ backgroundColor: "#f0fdf0b5" }}
    >
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        titleTypographyProps={{ variant: "h5" }}
        title={props.title}
        subheader={props.publishedAt}
      />
      <CardMedia
        component="img"
        height="194"
        image={
          props.urlToImage != null || undefined
            ? props.urlToImage
            : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEA8PDRAQDw8QDw8NEA0PDRAQEBUOFREWFhUXFRUYHighGBomGxYVITEhJSkrMS8uGCA4OTQtOCgtLisBCgoKDg0OFRAQFSsdHR0vMC0tLy0rLSsrLS0rLS0tKy0tLS0tKy0rLS0tKy0tLSsrLS0tLS0tLS0tLS0tLS0tK//AABEIAK8BIAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBQQGB//EAEMQAAEDAgMEBQkGBAQHAAAAAAEAAgMEEQUSIQYTMVEUIjJBYSNCU3FygZGSsQcVM1JioRaywdE0c4KiJEN0o7PC8P/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAxEQACAQIEAwYFBAMAAAAAAAAAAQIDEQQSITFBUWEFcYGRodETFBUy8GKxweEiI0P/2gAMAwEAAhEDEQA/ANoJgEoVgXsHy4bJglThBaCEwQCYBAxgEwCACZqCkQBWAIBEJFEsmUTJFWBZSyZFIYqllAiUDBZQBPdRIBFCE6hQAhCWychBNMVhFCmQsncVhEqYhSyZJS5KQrnBV2QTYWyUhMQlKZILJCFYqygTAQlTFKUCYpQITFKgkdqYJGpwkUhgmCUJwmUMEwSBOEDQzU6ACayRZAnCUJgkykEBNZEKKSiBGyITiB5GYNcW8wCQi40rldkEXG3HTwKF0CAmQCYoAVRFBAAKKiVABKVFBMTAUqdJZUJioFEpLoIYjwlTOKrQSyFKmKVMQClKZKUEsVQhFKUEhanCDEwQUhgEwQCYIKCE7UgThIpFgTgJGpyk2UFoTWUCcJNmiAEUQEbJDBZegoWZYox+m/vOv9VgtF7Dnotqrw9r3BzZKiJzWiMbqoe1mUHTyZuwnXiW3XPXeyOvCLWTOtzQeIB8CLrlfQxHzGj1Xb9Fy9EqmjydXn8Kmmif+8W7/e6O+rW8YqeYfmjnkid8jmOA+dYXa2Z2yjGW6uNJhMfcXD3g/Vc78Jd5rwfAtI/unOLObczUlXGB+WJlT8BA57j8LqHaKiGUSVEcJcQGsqSaV5PINmDTfwsrVWa4mTw9N8PI5XYdMPNDvU4f1VL4nt7THD1tNvivRRODhmaQ4fmabj4hEKlXfIyeEjwbR5jMEF6aSNru01rvW0FczsPiPm29kkLRV1xRm8HPg0YSi1pcIb5r3D1gEf0XNJhEg7LmO9dwVaqwfExlh6i4HClK6n0Ew4sJ9kh30XNK0t7QIPIgj6rRST2MZRkt1YQqpydzlU4qjNikpSiSlJTM2wEpUVEABQqKFBIqCKBQAWpwlamCBocJglCYFBQQnCQJ7pMpFgTpAUwQUME4SBG6ks7MPhEjy117ZS7Tncf3Wl93R+PxH9lwYMfKH2HfUKrGMUqKY5pJcOhhc8tidUzyxuOl7HS17cly1pSUtGehhqcZQu1fU1I6BgIOuhDhci1wbrrljDrXzC3e1zmn9lhUVbWzsEkD8MljOgkimne2/K7Ra6anrq2UyNifhsjon7qVrJahxZJa+VwA0PgVi23uzpjCMdlY2Y4svnvd7Raf6XVi86MWqrA73C7Gc0oPSJ7dJBsY+Hb0PV4qwV1bvTBmw3fhglMO9qN5u72zZbXy30ukWbtlC24IOoOhB4WWFS19bNn3LsNk3cjoX5Jqh2WVvaabDRw7wjPW10bo2yOw1jpXbuJrpahpe+18rQRqbdwQB1SYDSF2fo8TX8N5GwRSW9tlj+6MeFBn4c9UwflNQZm/94PI9xC4JsTq2GUPkwtphjE0odPO0siN7PdcaN0Op5FccO0z5M27q8GfkY6V+Wskdljb2nG3Bo7ygR6gAgWJLvE5b/sAEMywnYhWDc3fhnlzaDy9R5Tq5upp1urrp3KqfFKphmzy4U3cNa+fNUzDdtcLtL7jqg2Nr8Uhs9EXrlbi9PvXQGeETstmgMrBKLgEdQm/AgrLwrEaioySRyYdNAX5XyU08shsOIGls3gVYZad0s8c+6NiwlsoYRbI3WztEwNvx7l5banEMtTFDyiLyPbdb/0WxTYPSxuD4YmxEG/kHOiYT+pjCGu94K8HtJV5sRn5MMcQI/SwEj4ly6cJHNU7kcPaE3GlZPdr3NsOQKqgdcBOV1HlXIUpKJSJiClRKiRIESgoSmAFFEUARqcKtqYIGhgnCUFMEFDBMEjU6TKQ4Vl1WE4QUEFFAFFIaO7Bj5Q+w76tWN9oboRLg5qd2IfvIbwzZd3l3L+1m0t61s4N+IfYd9WqrF8Pqah2V8WFzwtcXRtqqeWVw0tcg6B1u8Lir/eephH/AK/E8rT4vS0VdilZhxi+74MObJUCAtFK7Et55JrLdXO4ENNufNc+wUs1DXQNqKarp/vGEx1MtSwNZLibXvmD2HMdC10jbG3mr133ZViMQCDBxAHNcIBTTiIOBzA5Bpe4BvbiFdU0uIS5DKzCpN3I2aPeQ1L8srb2e256rhc6jXVYnUeH3zWU8b5HNYxu187nPc4NaGiR9ySeAWv9oeIxil+98NqYn1WHOEYlikbK0xTkRujflPN7Xi/AhbcuD1T2GN9Pgzo3SOndG6lmcwzO7Ty06F5uetxVTMDqGxvhbS4IIZC10kAo5RG9zSCC5g0cRYcR3BAXNrAMHjoKaKlju4RAh0h7T5Sbve7xc65968x9pWG9LkwmnEjoXSVkuSZnaZI2me5jh6nNaVv3xTnh3y1f91TLTYg8sc9uFvdGc8bnRVLnMeRYlhJ6psSLjmmB8/OIz1A2i6ZHu6qDBo6WoaOyZmGW72fpcCHD2l6DYiNkvkqg4G9slHusuHMIqyxzGh+9uTcZSb+K3JqCteZHSRYS8ysEMpdBUOMkQvZjyT1mi50Omq56PBJ4H7ynpsFhksW7yKjljfY8RmbY2SQNnzpnSpYh2hJsxES4C7WSTxVfDW+nRoD7zyK3X00NXh9TWz1EVIcQxRlVBJUtBidHC4spopWni0tY4kd179y9cKKuG9IjwoGckzEQ1A3hy5ev+bq6a9yQ0FbutwY8JMAaIxTmCoMWQcG5OFvCydguZ/2f4jvHV8D4KKKanmhMs+HD/hJnSR3BZ+poaARzPcrqj/GzeWDQSwGMOc12sTRp18vxauzCaGqp8kccWGw0+fM+OmhmjOvaIHDN4nksfGKV7qmexBBczQu7t0wcHte0/AepOIHqsLjawEAk3dmJLWA38coF/WdV8ilrN5PNL3STSSD1F5I/Yr6S6cwUUz9M0dPI7S34m7NuAA7XgF8qpO73L0cCvufgeT2nLSEe9/weywqpzCxWldeawySxC34n3C1mrM86DLCgilUFMiKChSsIhUQRRcAWRsiogQjU4SBOEykMEwSJwmMYJwVWEQUhlt0QUgKIKRZamuqwmQM0MH/EP+W76tXBt7VyQwwGOaSAOqWMfJHI9hEZjffhxGl7eC7sI/EP+W76tXLtlh09TFAKZrHvjqGzFsjw1pa1juN+OpC87GXalbke/wBiyiqlNz2T42t66fmxkbP4hJ06KGnrZq+B0Uj5zOHnJYGxaXa3zZOHcT7uaKSaTpsj8VlpdzUVDY4XVBsWtJLeqXXI7rAdy06XCa2arpaiohpaRtO50n/Dm73lwtl04j+5XOdjDLDWmVjW1ElTNLTyZwbxk5mtd3AE3BuO9cOWTWz3b4rh5/2fQKth1O8pqN1FNpQk75nfgovR62WkdLN3OfE8aqH0eFyvqJaYzTSMmnic9pMTXFoeQy19Bey3NknsdJI6PEaitDWBrmTGXKMxuHDN39Uhc2M4bWTxYc5sEO/ppM8kLnsERyNAGg0ym3DuXXSHEgye9LSQPMLxEYHtBM/BmbrdkXJ9yqKand34cHy8jKtOE8O4wyxbctM0Va83bdZno1qmtPXKkxuo6d0kSO+721QwwjO7IX5Td+Xs6O62blou/azGOiVeHukkkbT5at0sbHOAflYMoLRo45iLX5rhbsDH0PIXzdI3RkMe+G56Ta9rZeGbS/vXbPg0882FyVMcbujMkFSC9rm7wAZTbzruaClapZ3W7T3vxQ3LB/EjKMk4xU4vRJtKLyvW923pmet7FuByzzwzV80zwJYpTT00cztzFCAbEgGxkuNT3eHAedqMTrPurDnwzTdJlqnR7zevL3HeThocSesNGix00C9BhuEz0r6qCIB1FK2SSC8gDopXNIyZeR5+A5lcUOz1SKLDactbnpqts8oztsIxNK7Q9+j26BDjJrZ7O/fdfiCFWjGbd4tZ4NLS2VRno1fS2ifN69SP2gdUuwt0b3RufV7qphbI5lnDLma4d47xfmq56iorZ6x3TH0dHRudDmhc5rnSNvnc5wINhr+3irsS2XecQgrafRm+bLUMzZbPa6+do7yRx8fWUKzCq2nnqX0ccNTBVHNJTTEDK++pAJAINz39/DRNqeudaLlx0997Ewnh7R+DJKTjpe3+Lc7uN3dXtdJyNTZmbNDlNWK1zHuBm7w09lp7yba3NzcleexiZ4rJw1zmguitYXGsTPzMtx5OW3sthMlMyZ026bJPMZt1ADu2C1so5e5YuKVdq6eOw4x2Oax/BYeBt+110UL5VdWPMxWX408jur76fwkt+SS5Fm1tVkw+QDQyPijHqzhxHwaR714Cm4hem22qfIU0X5pHy29luUfzlebpAvawcbU+9nznaMr1bckbdEtyA6LCpOC2Kc6JzOCLO4FBBpRusjUhUQKYJMCBRRRAiKKKJAIE6rCdUNBTNShMEFDBMEoRCBjBO1VogoGXBMFW0pgkUjRwjtn2HfVqztvsYnoqeOSncGvM7WElrXdUxvPA+LQtDCO2f8t31avP/ap/hIv+qZ/4pF52NbSk1yPo+wYRnWpRkrpy2Zq7F7RCug65Anis2UCwuPNeByP7G/guTA8cqJsTrKWR4MMTagtYGNBBbMxo1AudHFeWkpZcLNFiFMHOhlghMjLm28dG0yMPg6xIPcR4Bd+xdYybF6yaIkxyQzytJFjkdNEdQuKNSTcIy3vr1VnY9ypgqShiK1NJwcXl/TJSSa6W1t0ZZiGPYq+vqKWiIfu3vLYwyAWjFr9Z9r8ea7MLkx8zwiojG43kW9N6T8POM/B1+F+Gq89VdN+9637ttvs0nHJ2LjN29Pyr1Ozn330hnT8vR8smfL0btZDl7PW42Uwu5O7lvw23NsRCFOissaP2J2f3tuPBfsCfH6mDF2Ukz2mmmcN2CxgI3jTks4C58oLJ/tD2ilomQMp3ZJZXOc5wa11ogLAWPMuHylcX2n0zmClrI+3FJur24efGT4BzT8y4JwzGcTy3vTxUnG+lyzjyuJJW/KqlKV5QT1b08fxmWHo0ZqjiZRWSMJZ1beUNFdc5XT66nssNxlr8PbWPI0p3SSW/PGCH/wC5pWDsztFUuo6utrHbxkRyRxhjY7va0E6gd5e0X14FeTp8ZMOG1dBISJRUsZl5ROJzgeAMX+9fQMKwNv3ZHRvu3eQAvIALmyydc+shxt/pRCpKbTjwXqZ4nC0sLCedaTqJJ21yLV25XTseVpMVx6qZ0qnymHM7LGxkViGkg5WO6xsQRxubaL1FPiVXJh0k8sbYagQzPYA0jstJa5zHDq3IPV17udl5L7uxnCw407t7A1xeRH5Vlu87t2reZy/Fer2exoYlSSl7AySz4JGtJLTmj4tvrY34HlxKKTd7Nu9tn+6Hj4wcFUpwpumpLWO6V9IyXumU7CYpUVdPJNUODnCofE05GtGQRxngBzcVlYmy1bUOvxLNNfRM8bft3rW2CpXQ0LGyMcxxkle5j2Frr5rag68AFi4rfplVe/aisNeG5ZqNf7Lpw98kb72PMx2VYqrkSSzO1tuWh57aufNNG30cLR73OJ+llyUirxSTPUSn9WUepoDf6K2lC9+lHLTiuh8jip5qku9mrTLVgcsulXfEVMjnid7HKwLnjKvCwZqWBRBqKQEUUUSAiiiiAKmqxVhMqGhwiEAomMdqYJAi1IY4TBIEQgY4KdqqCdqTKRpYR2z7B/mas7b/AAmarp4o6dm8e2obIRma3qbt4vdxHeQtDCe2fYP8zV3VkrmgZSAb21c0dx/MuDFRUm0+KPc7LrSoZakd4u+px0+FiShipapvGlhhkZcEh7Y2jQjS4cLg8wvM7E7MVNDWzGVoMO5miZKHNyuJkjLere4uGniO5eoFU/jmb6jJBa9/Ao9Ikv22/PB8VzulFtPkd9PGVIU6tNfbU3/rkeLxDBsVjr6mqoY7bxzg2TNC68brX6rz4cl24c7aHfRb+253ke86tJ+HvBn4C/C/Bet3zvTRD/Wzw8PX8Us08gdYOba4t5SEHhyP/wBql8BLaTR0S7TlKKjKlB2VruOuitzKtqcONXSTwAZnOjzMFwLysIcwXPC5FvesP7Otn5qNk76iMsklc1gaXNdaNoJv1SeJcflC3hUyaXe024+Uh439fBGOeQ8ZGDQ6l8XLwCp005qb3RzRxdSOHnh19snd/nU8ZjGx80uKiVsd6R8scr5MzABqHSNsTc3IPAecva41TSTU8sUMm6kkaWiS17A8R4XFxcai6Zsx9Kx2jiGhzORt7guY1Mn523003kHv4pRpRje3EqtjatX4Tl/zVl4c777LyR44RbQxsNOPKstkEuaF5DeGj3EO4d7hdbOA4DPRUM8THA1T2yOaWEWbJu8rGhx5cz3lbD6l+tnsv3DeQ2t71BK634zGkngXxkj4ApRopO92/Eur2hOrHJkjFNpuytdra/scWyrKxsDhiBeZd87KXuY7yWRltW/qzrAxs2q6gnuMZPqETF7KF979dr9dC0tNhy0XhNq3Wlqz7IHrMTB/Vb0YaqJx16uZyqWS42WiXd0PHM1NzxJv8dVo0wXFC1aMA4L33ofJSbZ3067YyuSFdkaxkJHVGV0NK5Y10sWLNEWNTJAnCkZFFFEgIooogCoJggoFQFgUQuogdwpgUiIQUOCmBVSYFAFgKIcqrqXQO53UtUWFxAucth67hSpxN9hmFusLWNtbeorkDyOCL6qS1g74AX+KwqUnJ3R24fFxpwyyTIMSJ4l40DT1mE3v39VO3EibWL76ecy/8vivP4pjFbE/qynIeF2sPuXENpaz0p+UJLCTfFGv1Glyfkvc9i3EcupDj+lzmj3aAHirJ685jfMOBIBbYXGnFvivGfxNW+lPytRO1Fb6X3ZWWT+Tqc0H1Gj19Pc9aMRAtq+4B72cvBqJruRfYWFwWd3A3DfcvIjamu9Kflap/E9b6U/BqPk6nND+pUevkvc9lDXkXABJLHG5cLgZTyFhpc6hUSYgbXu88SAXM9fAtXlP4orfS/7WoHaet9KflYj5Op0/PAX1Kj19Pc9Q7ETrq/jftM7rX81I6tdrq/4sA4H9NufwXmP4lrfTH5WKfxLW+lPytS+TqdPMf1Kj19Pc9jTYhI4HK0Wvx1NyvNbZQkM3ryM88gGQcmN1P7N+K5BtLWj/AJg98bD9VkTZ5Hue83c9xe48NSb8O5a0cJKM1KT2MsR2hCUHGCepRC1acDOCpggXfDCu6TPIZZG1dTFU1i6GNWTBFsa6WLnYF0MWcjQsCYJQmCgZFFFEgIooogCtQKKKgGujdKogBrohKigYVELqAoHcZRBRAXJdQqKIA5qymEjS0rAfRFptZenXPUQgq4ysZyief6Gp0NbG5HJTchXmJymP0NToi2dyEphCM4ZTHNIj0VaxhCm5CecWUyOiqdEWvuQjuQjOOxkdEVjaNaghCIiCTmGU4Y6ayvbEukMTBqlyHYpEacMVoamAU3KEa1XtCVoT2UsYwRQRSAiiiiQEUUUQAFFFEARRRFMAKIqIACgRQsi4EupdCyKBkupdRBMCXUIUTXQBSWIWVpSEIJFspZRFMBS1DKnspZACZVMqeylkALZGyNkEACyNkVEgJZRRFAwtTJQmCACigipAiiiiAIooogD/2Q=="
        }
        alt="news image"
      />
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary">
          {props.description}
        </Typography>
        <Typography paragraph>{props.content}</Typography>
        <a href={props.url} target={"_blank"}>
          read more
        </a>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* <CardContent>
          <Typography paragraph>{props.content}</Typography>
          <a href={props.url} target={"_blank"}>
            read more
          </a>
        </CardContent> */}
      </Collapse>
    </Card>
  );
}
