export default function Availability() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f0e6d6] p-8 rounded-lg">
      <div className="p-4 border-r border-black">
        <h2 className="text-xl font-semibold mb-4">Availability Hours</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Monday - Friday</h3>
            <p className="text-muted-foreground">11:30 AM - 11:30 PM</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Timezone</h3>
            <p className="text-muted-foreground">UTC+8</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Expected Study Hours</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Full-time Students</h3>
            <p className="text-muted-foreground">7 hours per day</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Part-time Students</h3>
            <p className="text-muted-foreground">2-3 hours per day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
