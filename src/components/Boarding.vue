<template>
    <div class="bg-white min-h-screen text-black">
        <div v-if="!done" class="flex flex-col justify-center items-center pt-5">
            <h1 class="text-3xl font-bold">Welcome! </h1>
            <div class="flex flex-col justify-center items-center pt-4">
                <p class="text-xl pb-4">
                    Please Enter Your Balance:
                </p>
                <input class="input input-bordered bg-violet-600 input-sm w-40" type="number" v-model="balance">
                <button @click="Clicked()"
                    class="btn bg-violet-600 btn-sm border-none text-black w-16 hover:bg-violet-700 mt-4">Enter</button>
            </div>
        </div>
        <div v-else>
            <div class="flex justify-center items-center flex-col pt-5">
                <p class="text-xl text-gray-950 ">Account Balance:</p>
                <p class="text-2xl font-bold">
                    ${{ balance }}
                </p>
                <button class="btn bg-violet-600 btn-sm border-none text-white w-16 hover:bg-violet-700 mt-4"
                    @click="trans = true">
                    Add
                </button>
                <div v-if="trans">
                    <div class="modal-box bg-violet-400">
                        <div class="flex flex-col justify-center items-center">
                            <h1 class="text-2xl font-bold">Add Transaction</h1>
                            <div class="flex flex-col justify-center items-center pt-4">
                                <p class="text-xl pb-4">
                                    Please Enter Your Transaction Details:
                                </p>
                                <p>
                                    Transaction Name:
                                </p>
                                <input class="input input-bordered bg-violet-600 input-sm w-40" type="text"
                                    v-model="NameOfTrans">
                                <p>
                                    Transaction Value and Type:
                                </p>
                                <input class="input input-bordered bg-violet-600 input-sm w-40" type="number"
                                    v-model="Val" aria-label="Transaction Value">
                                <div class="pt-4">
                                    <label>
                                        <input type="radio" name="transactionType" v-model="transactionType"
                                            value="income">
                                        Income
                                    </label>
                                    <label>
                                        <input type="radio" name="transactionType" v-model="transactionType"
                                            value="expense">
                                        Expense
                                    </label>
                                </div>
                                <button
                                    class="btn bg-violet-600 btn-sm border-none text-white w-16 hover:bg-violet-700 mt-4"
                                    @click="HandleTrans()">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <table class="table text-xl table-md mt-10 text-center">
                        <thead class="table-header text-black">
                            <tr>
                                <th>Income</th>
                                <th>Expenses</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ transactions.Income.length }}</td>
                                <td>{{ transactions.Expenses.length }}</td>
                            </tr>
                            <tr>
                                <th colspan="2">
                                    Total
                                </th>
                            </tr>
                            <tr>
                                <td>{{ totalIncome }}</td>
                                <td>{{ totalExpenses }}</td>
                            </tr>
                            <tr>
                                <th>Transaction Details</th>
                                <th>Transaction Details</th>
                            </tr>
                            <tr>
                                <td>
                                    <ul>
                                        <li v-for="(transaction, index) in transactions.Income" :key="index">
                                            {{ transaction.name }}: ${{ transaction.value }}
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li v-for="(transaction, index) in transactions.Expenses" :key="index">
                                            {{ transaction.name }}: {{ transaction.value }}
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <footer>
            <div class="mt-20 flex items-center justify-center text-black">
                <p>
                    Inspired By(Name and Design): Braja Omar
                </p>
            </div>
        </footer>
    </div>

</template>

<script>

export default {
    name: 'Boarding',
    data() {
        return {
            trans: false,
            balance: 0,
            done: false,
            transactions: {
                Income: [],
                Expenses: [],
            },
            transactionType: '',
            Val: 0,
            NameOfTrans: ''
        }
    },
    methods: {
        Clicked() {
            this.done = true;
            this.$emit('balance', this.balance);
            this.$emit('done', this.done);
        },
        HandleTrans() {
            console.log(this.transactionType);
            if (this.transactionType === 'income') {
                this.transactions.Income.push({
                    name: this.NameOfTrans,
                    value: this.Val
                });
                this.balance += this.Val;
            } else if (this.transactionType === 'expense') {
                this.transactions.Expenses.push({
                    name: this.NameOfTrans,
                    value: this.Val
                });
                this.balance -= this.Val;
            }
            this.trans = false;
            this.Val = 0;
            this.NameOfTrans = '';
            this.transactionType = '';
        }
    },
    computed: {
        totalIncome() {
            return this.transactions.Income.reduce((sum, transaction) => sum + transaction.value, 0);
        },
        totalExpenses() {
            return this.transactions.Expenses.reduce((sum, transaction) => sum + transaction.value, 0);
        }
    }

}
</script>
