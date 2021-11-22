import { useState } from "react";

export default function PushSwap() {
    const [array, setArray] = useState([4, 5, 1, 2]);


    function isSorted(a, len) {
        for (i = 0; i < len - 1; i++) {
            if (a[i] > a[i + 1]) {
                return false;
            }
        }
        return true;
    }

    function mergeSort(a, b, str, start, end) {
        if (start < end) {
            mid = Math.floor((start + end) / 2);
            mergeSort(a, b, str, start, mid);
            mergeSort(a, b, str, mid + 1, end);
            merge(a, b, str, start, mid, end);
        }
    }

    let k, length;

    function merge(a, b, str, start, mid, end) {
        //SPLIT A TO B 
        //MEMORIZE LENGTH TO GO THROUGH 
        //COMPARE VALUES AND PUSH EVERYTHING TO A
        //Add missing values
        //Rotate to end, and when it's done rotate to beginning

        //TO DO : rotate list for it to be on the right index
        len = (end - start + 1);
        if (Math.abs(start - k) < Math.abs(length - start)) {
            while (k != start) {
                str += "rra ";
                rra(a, b);
                decrK();
            }
        } else {
            while (k != start) {
                str += "ra ";
                ra(a, b);
                incrK();
            }
        }

        for (i = 0; i < len / 2; i++) {
            str += "pb rb ";
            pb(a, b);
            rb(a, b);
        }

        i = start;
        j = mid + 1;
        while (i <= mid && j <= end) {
            if (a[0] <= b[0]) {
                str += "ra ";
                ra(a, b);
                j++;
            } else {
                str += "pa ra ";
                pa(a, b);
                ra(a, b);
                i++;
            }
            incrK();
        }
        while (j <= end) {
            str += "ra ";
            ra(a, b);
            incrK();
            j++;
        }
        while (i <= mid) {
            str += "pa ra ";
            pa(a, b);
            ra(a, b);
            incrK();
            i++;
        }
    }

    function incrK() {
        if (k < length - 1) {
            k++;
        } else {
            k = 0;
        }
    }

    function decrK() {
        if (k > 0) {
            k--;
        } else {
            k = length - 1;
        }
    }


    function main(strList) {
        list = strList.split(" ");
        str = "";
        a = [];
        b = [];
        index = 0;
        for (i = 1; i < strList.length; i++) {
            a.push(strList[i]);
        }
        length = a.length;
        if (isSorted(a, length)) {
            console.log("\n");
            return;
        }
        mergeSort(a, b, str, 0, count(a) - 1);
        console.log(str.trim() + "\n");
        // var_dump(a);
    }
    length = 0;
    k = 0;
    main();

    function sa(a, b) {
        if (a.length > 1) {
            tmp = a[0];
            a[0] = a[1];
            a[1] = tmp;
        }
    }

    function pa(a, b) {
        if (b.length > 0) {
            a.unshift(b[0]);
            b.shift();
        }
    }

    function pb(a, b) {
        if (b.length > 0) {
            b.unshift(a[0]);
            a.shift();
        }
    }

    function rb(a, b) {
        if (b.length > 1) {
            b.push(b[0]);
            b.shift();
        }
    }

    function ra(a, b) {
        if (a.length > 1) {
            a.push(a[0]);
            a.shift();
        }
    }


    function rra(a, b) {
        if (a.length > 1) {
            a.shift(a[a.length - 1])
            a.splice(-1);
        }
    }

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1fr)" }}>
            <div>{array[0]}</div>
            <div>{array[1]}</div>
            <div>{array[2]}</div>
            <div>{array[3]}</div>
        </div>
    );
}
