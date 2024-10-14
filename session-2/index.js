// Lớp BubbleSort
class BubbleSort {
    // Phương thức sắp xếp tăng dần
    sortAscending(arr) {
        const n = arr.length;
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                // Hoán đổi nếu phần tử hiện tại lớn hơn phần tử tiếp theo
                if (arr[j] > arr[j + 1]) {
                    this.swap(arr, j, j + 1);
                }
            }
        }
        return arr;
    }

    // Phương thức sắp xếp giảm dần
    sortDescending(arr) {
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                // Hoán đổi nếu phần tử hiện tại nhỏ hơn phần tử tiếp theo
                if (arr[j] < arr[j + 1]) {
                    this.swap(arr, j, j + 1);
                }
            }
        }
        return arr;
    }

    // Phương thức hoán đổi hai phần tử
    swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

// Hàm kiểm tra và in kết quả
function printSortedArrays() {
    const arr = [10, 2, 3, 2, 5];
    const bubbleSort = new BubbleSort();

    // Sắp xếp tăng dần
    const ascendingSortedArray = bubbleSort.sortAscending([...arr]);
    console.log("Mảng đã sắp xếp tăng dần:", ascendingSortedArray);

    // Sắp xếp giảm dần
    const descendingSortedArray = bubbleSort.sortDescending([...arr]);
    console.log("Mảng đã sắp xếp giảm dần:", descendingSortedArray);
}

// Gọi hàm để thực thi
printSortedArrays();
