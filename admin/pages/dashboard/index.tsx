import Protected from "../../components/guards/Protected";

export default function Dashboard() {
  return (
    <Protected>
      <div>welcome to the dashboard</div>
    </Protected>
  );
}
