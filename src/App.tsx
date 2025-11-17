import "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { ListItem } from "./components/ListItem";
import { Seperator } from "./components/Seperator";

function App() {
  return (
    <div className="p-10">
      <Card>
        <div>
          <ListItem label="All pages" checked={true} />
        </div>
        <Seperator />
        <div className="w-full">
          <ListItem label="Page 1" checked={true} />
          <ListItem label="Page 2" checked={true} />
          <ListItem label="Page 3" checked={true} />
          <ListItem label="Page 4" checked={true} />
        </div>
        <Seperator className="-mt-[3px]" />
        <Button />
      </Card>
    </div>
  );
}

export default App;
