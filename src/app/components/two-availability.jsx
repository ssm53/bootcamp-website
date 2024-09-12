export default function TwoAvailability() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 rounded-lg">
      <div className="p-4 border-r border-black">
        <h2 className="text-3xl font-semibold mb-4">Availability Hours</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-2xl font-medium mb-2">Monday - Friday</h3>
            <p className="text-xl text-muted-foreground md:text-2xl">
              11:30 AM - 11:30 PM
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-2">Timezone</h3>
            <p className="text-xl text-muted-foreground md:text-2xl">UTC+8</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-3xl font-semibold mb-4">Expected Study Hours</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-2xl font-medium mb-2">Full-time Students</h3>
            <p className="text-xl text-muted-foreground md:text-2xl">
              7 hours per day
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-2">Part-time Students</h3>
            <p className="text-xl text-muted-foreground md:text-2xl">
              2-3 hours per day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
