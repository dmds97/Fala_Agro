import Header from "../../components/Header";
import Card from "../../components/Card";

const EventPage = () => {
    return (
        <div>
            <Header />
            <main className="feed">
        {[1, 2, 3, 4, 5, 6].map( _ => <Card />)}
      </main>
        </div>
    )
}

export default EventPage;