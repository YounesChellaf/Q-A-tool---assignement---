export function sortItems  ( array,field ) {
    array.sort(function(a, b) {
        return a[field].localeCompare(b[field]);
    });
}