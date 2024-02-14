// Take an input of array of movie jobs objects with the following info: movie name, filming start date, filming end date
//    Given the input, output the optimal job taken to complete the most jobs possible
//        OptimalScheduling(I)
//          While (I != null) do
//            Accept the job j from I with the earliest completion date.
//            Delete j, and any interval which intersects j, from I

let offeredMovieJobs = [
    {
        name: "movie1",
        startDate: "2024-01-15",
        endDate: "2024-06-12"
    },
    {
        name: "movie2",
        startDate: "2024-01-01",
        endDate: "2024-04-03"
    },
    {
        name: "movie3",
        startDate: "2024-02-01",
        endDate: "2024-02-27"
    },
    {
        name: "movie4",
        startDate: "2024-03-15",
        endDate: "2024-07-04"
    },
    {
        name: "movie5",
        startDate: "2024-08-15",
        endDate: "2024-12-31"
    },
    {
        name: "movie6",
        startDate: "2024-05-06",
        endDate: "2024-06-12"
    },
    {
        name: "movie7",
        startDate: "2024-06-01",
        endDate: "2024-10-14"
    },
    {
        name: "movie8",
        startDate: "2024-05-30",
        endDate: "2024-07-01"
    },
    {
        name: "movie9",
        startDate: "2024-07-30",
        endDate: "2024-10-20"
    },
    {
        name: "movie10",
        startDate: "2024-11-03",
        endDate: "2024-12-14"
    },
]