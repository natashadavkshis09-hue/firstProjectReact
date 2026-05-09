
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  
  const products = [
    { id: 1, name: "Ноутбук", price: 1000 },
    { id: 2, name: "Мышь", price: 50 },
    { id: 3, name: "Клавиатура", price: 100 }
  ];

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5">🛒 Магазин</Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        {products.map(p => (
          <Card key={p.id}>
            <CardContent>
              <Typography>{p.name}</Typography>
              <Typography>${p.price}</Typography>
              <Button 
                variant="contained" 
                size="small"
                onClick={() => { setSelected(p); setOpen(true); }}
              >
                Купить
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ bgcolor: 'white', p: 3, mt: 10, mx: 'auto', width: 300 }}>
          <Typography variant="h6">Подтверждение</Typography>
          <Typography>Купить {selected?.name} за ${selected?.price}?</Typography>
          <Button onClick={() => { alert(`Куплен ${selected?.name}`); setOpen(false); }}>
            Да
          </Button>
          <Button onClick={() => setOpen(false)}>Нет</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default App;