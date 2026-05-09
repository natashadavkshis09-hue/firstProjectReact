import Header from "../Header";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductPages() {
    const params = useParams();
    const navigate = useNavigate();
    const [productData, setProductData] = useState({
        title: "ноутбук",
        price: 185,
        opis: "Портативный компьютер",
        id: "1"
    });

    useEffect(() => {
        fetch("https://69eb79f897482ad5c527c20a.mockapi.io/priducts/" + params.id)
            .then(res => {
                if (!res.ok) throw new Error("Товар не найден");
                return res.json();
            })
            .then(data => setProductData(data))
            .catch(err => {
                console.error(err);
                setProductData({ 
                    title: "Не найдено", 
                    price: 0, 
                    opis: "Товар отсутствует", 
                    id: params.id 
                });
            });
    }, [params.id]);

    const styles = {
        container: {
            minHeight: "100vh",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "40px 20px"
        },
        card: {
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            overflow: "hidden",
            animation: "fadeIn 0.5s ease-in-out"
        },
        cardHeader: {
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "30px",
            textAlign: "center",
            color: "white"
        },
        cardHeaderTitle: {
            margin: 0,
            fontSize: "28px",
            fontWeight: "bold"
        },
        cardHeaderIcon: {
            fontSize: "48px",
            marginBottom: "10px"
        },
        cardBody: {
            padding: "40px"
        },
        productTitle: {
            fontSize: "26px",
            color: "#333",
            marginBottom: "20px",
            paddingBottom: "15px",
            borderBottom: "3px solid #667eea",
            display: "inline-block"
        },
        infoRow: {
            marginBottom: "25px",
            display: "flex",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: "10px"
        },
        label: {
            fontWeight: "bold",
            color: "#666",
            fontSize: "16px",
            minWidth: "80px"
        },
        price: {
            fontSize: "36px",
            fontWeight: "bold",
            color: "#667eea"
        },
        priceCurrency: {
            fontSize: "20px",
            color: "#999",
            marginLeft: "5px"
        },
        descriptionBox: {
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "20px",
            lineHeight: "1.6",
            color: "#555",
            borderLeft: "4px solid #667eea"
        },
        descriptionText: {
            margin: 0,
            fontSize: "16px"
        },
        idBadge: {
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#e9ecef",
            padding: "8px 16px",
            borderRadius: "20px",
            fontSize: "14px",
            color: "#666",
            marginTop: "20px"
        },
        divider: {
            height: "1px",
            backgroundColor: "#e0e0e0",
            margin: "25px 0"
        },
        errorMessage: {
            textAlign: "center",
            color: "#dc3545",
            padding: "20px",
            fontSize: "18px"
        }
    };

    const animationStyle = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;

    return (
        <div style={styles.container}>
            <style>{animationStyle}</style>
            <Header />
            
            <div style={styles.card}>
                <div style={styles.cardHeader}>
                    <div style={styles.cardHeaderIcon}>📦</div>
                    <h1 style={styles.cardHeaderTitle}>Карточка товара</h1>
                </div>
                
                <div style={styles.cardBody}>
                    <div style={styles.infoRow}>
                        <div style={styles.label}>Название:</div>
                        <div style={styles.productTitle}>{productData.title}</div>
                    </div>

                    <div style={styles.infoRow}>
                        <div style={styles.label}>Цена:</div>
                        <div>
                            <span style={styles.price}>{productData.price}</span>
                            <span style={styles.priceCurrency}>$</span>
                        </div>
                    </div>

                    <div style={styles.divider} />

                    <div style={styles.infoRow}>
                        <div style={styles.label}>Описание:</div>
                    </div>
                    <div style={styles.descriptionBox}>
                        <p style={styles.descriptionText}>{productData.opis}</p>
                    </div>

                    <div style={styles.idBadge}>
                        <span>🆔</span>
                        <span>ID товара: {params.id}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPages;