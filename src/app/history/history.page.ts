import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';

interface Transaction {
  type: 'sent' | 'received' | 'topup';
  initials: string;
  avatarBg: string;
  name: string;
  detail: string;
  amount: string;
  time: string;
  dateGroup: 'Today' | 'Yesterday';
}

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent],
})
export class HistoryPage {
  transactions: Transaction[] = [
    {
      type: 'sent',
      initials: 'MS',
      avatarBg: '#ff5722',
      name: 'Maria Santos',
      detail: 'Sent to',
      amount: '-₱1,000.00',
      time: '8:41 AM',
      dateGroup: 'Today',
    },

    {
      type: 'received',
      initials: 'JD',
      avatarBg: '#2e7d32',
      name: 'Juan Dela Cruz',
      detail: 'Received from',
      amount: '+₱3,000.00',
      time: '8:15 AM',
      dateGroup: 'Today',
    },

    {
      type: 'topup',
      initials: 'TU',
      avatarBg: '#1565c0',
      name: 'Top Up',
      detail: 'From Visa •••• 4242',
      amount: '+₱1,000.00',
      time: '7:30 AM',
      dateGroup: 'Today',
    },

    {
      type: 'sent',
      initials: 'AR',
      avatarBg: '#3f51b5',
      name: 'Ana Reyes',
      detail: 'Sent to',
      amount: '-₱750.00',
      time: '9:20 PM',
      dateGroup: 'Yesterday',
    },

    {
      type: 'received',
      initials: 'LR',
      avatarBg: '#00897b',
      name: 'Luis Ramirez',
      detail: 'Received from',
      amount: '+₱1,250.00',
      time: '6:45 PM',
      dateGroup: 'Yesterday',
    },
  ];

  filteredTransactions: Transaction[] = [...this.transactions];

  activeFilter: string = 'All';

  filterTransactions(filter: string) {
    this.activeFilter = filter;

    if (filter === 'All') {
      this.filteredTransactions = [...this.transactions];
    } else if (filter === 'Sent') {
      this.filteredTransactions = this.transactions.filter(
        (transaction) => transaction.type === 'sent',
      );
    } else if (filter === 'Received') {
      this.filteredTransactions = this.transactions.filter(
        (transaction) => transaction.type === 'received',
      );
    } else if (filter === 'Top-Up') {
      this.filteredTransactions = this.transactions.filter(
        (transaction) => transaction.type === 'topup',
      );
    }
  }

  getTransactionsByGroup(group: 'Today' | 'Yesterday') {
    return this.filteredTransactions.filter(
      (transaction) => transaction.dateGroup === group,
    );
  }

  goBack() {
    window.location.href = '/home';
  }

  goHome() {
    window.location.href = '/home';
  }

  goToQRGenerator() {
    window.location.href = '/qr-generator';
  }
}
