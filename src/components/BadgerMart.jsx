import { useEffect, useState } from "react"
import BadgerSaleItem from "./BadgerSaleItem";
import { Col, Container, Row } from "react-bootstrap";

export default function BadgerMart(props) {

    const [saleItems, setSaleItems] = useState([]);

    useEffect(() => {
        fetch("https://cs571.org/api/s24/hw3/all-sale-items", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSaleItems(data);
        })
    }, [])
    const [featureditem, setFeaturedItem] = useState("Loading");
    useEffect(() => {
        fetch("https://cs571.org/api/s24/hw3/featured-sale-item", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setFeaturedItem(data);
        })
    }, [])
    return <div>
        <h1>Badger Mart</h1>
        <p>Welcome to our small-town mini mart located in Madison, WI!</p>
        <p>Today's featured item is {featureditem.name} for ${featureditem.price}!</p>
        <Container>
            <Row>
            {
                saleItems.map(saleItem => {
                    return <Col key={saleItem.name} xs={12} md={6} lg={4} xl={4}>
                        <BadgerSaleItem
                            name={saleItem.name}
                            description={saleItem.description}
                            price={saleItem.price}
                            featured={saleItem.featured}
                            featuredname={featureditem.name}
                            featuredprice={featureditem.price}
                        />
                    </Col>
                })
            }
            </Row>
        </Container>
    </div>
}