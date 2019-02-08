const byDate = ({ date: dateA }, { date: dateB }) => {
    return dateA.isBefore(dateB) ? -1 : dateA.isAfter(dateB) ? 1 : 0;
};

export default byDate;
